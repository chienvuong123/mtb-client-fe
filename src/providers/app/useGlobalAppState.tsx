'use client';

import {
  createContext,
  useContext,
  useMemo,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import axios, { AxiosInstance } from 'axios';
import { message } from 'antd';

// URL cơ sở của API backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Định nghĩa cấu trúc các đường dẫn API
interface ApiRoutes {
  auth: {
    login: string;
    logout: string;
    refreshToken: string;
    profile: string;
  };
  product: {
    list: string;
    detail: string;
    create: string;
    update: string;
    delete: string;
  };
  cart: {
    list: string;
    create: string;
    delete: string;
  };
  discount: {
    list: string;
  };
  collection: {
    list: string;
  };
}

// Định nghĩa kiểu dữ liệu user được lưu trong state
interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: string;
  avatar?: string;
}

// Định nghĩa kiểu dữ liệu context toàn cục
interface GlobalAppStateContextType {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  axiosInstance: AxiosInstance;
  API_ROUTES_COMPANY: ApiRoutes;
  COMPANY_ID: string;
  logout: () => void;
}

// Tạo context cho trạng thái toàn cục
const GlobalAppStateContext = createContext<
  GlobalAppStateContextType | undefined
>(undefined);

// Hook custom để sử dụng context
export const useGlobalAppState = () => {
  const context = useContext(GlobalAppStateContext);
  if (context === undefined) {
    throw new Error(
      'useGlobalAppState must be used within a GlobalAppStateProvider',
    );
  }
  return context;
};

interface GlobalAppStateProviderProps {
  children: ReactNode;
}

// Cấu trúc các đường dẫn API
const API_ROUTES_COMPANY: ApiRoutes = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    refreshToken: '/auth/refresh-token',
    profile: '/auth/profile',
  },
  product: {
    list: '/products',
    detail: '/products',
    create: '/products',
    update: '/products',
    delete: '/products',
  },
  cart: {
    list: '/cart',
    create: '/cart',
    delete: '/cart',
  },
  discount: {
    list: '/discount',
  },
  collection: {
    list: '/collections',
  },
};

export const GlobalAppStateProvider = ({
  children,
}: GlobalAppStateProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // ID công ty hiện tại (có thể lấy từ local storage hoặc user)
  const COMPANY_ID = 'current-company-id';

  // Tạo instance axios có thể được tái sử dụng trong toàn ứng dụng
  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Thêm interceptor để xử lý header Authorization
    instance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    // Thêm interceptor để xử lý các lỗi phản hồi
    instance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        // Xử lý refresh token khi token hết hạn (401)
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const refreshToken = localStorage.getItem('refresh_token');
            if (refreshToken) {
              const response = await axios.post(
                `${API_BASE_URL}${API_ROUTES_COMPANY.auth.refreshToken}`,
                { refreshToken },
              );

              const { accessToken } = response.data;
              localStorage.setItem('access_token', accessToken);

              // Cập nhật header và thử lại yêu cầu ban đầu
              originalRequest.headers[
                'Authorization'
              ] = `Bearer ${accessToken}`;
              return axios(originalRequest);
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
          } catch (refreshError) {
            // Nếu refresh token cũng hết hạn, đăng xuất người dùng
            logout();
          }
        }

        // Xử lý các lỗi phổ biến khác
        if (error.response?.status === 400) {
          message.error('Dữ liệu không hợp lệ. Vui lòng kiểm tra lại.');
        } else if (error.response?.status === 403) {
          message.error('Bạn không có quyền thực hiện hành động này.');
        } else if (error.response?.status === 404) {
          message.error('Không tìm thấy tài nguyên yêu cầu.');
        } else if (error.response?.status === 500) {
          message.error('Lỗi máy chủ. Vui lòng thử lại sau.');
        } else if (error.code === 'ECONNABORTED') {
          message.error('Yêu cầu đã hết thời gian. Vui lòng thử lại.');
        } else if (!error.response) {
          message.error(
            'Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối mạng.',
          );
        }

        return Promise.reject(error);
      },
    );

    return instance;
  }, []);

  // Hàm đăng xuất
  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser(null);
    setIsAuthenticated(false);

    // Chuyển hướng đến trang đăng nhập
    if (typeof window !== 'undefined') {
      window.location.href = '/login';
    }
  };

  // Kiểm tra trạng thái đăng nhập khi tải trang
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = localStorage.getItem('access_token');
      if (token) {
        try {
          const response = await axiosInstance.get(
            API_ROUTES_COMPANY.auth.profile,
          );
          setUser(response.data);
          setIsAuthenticated(true);
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          logout();
        }
      }
    };

    if (typeof window !== 'undefined') {
      checkAuthStatus();
    }
  }, [axiosInstance]);

  // Giá trị được chia sẻ trong context
  const value = {
    user,
    isAuthenticated,
    setUser,
    axiosInstance,
    API_ROUTES_COMPANY,
    COMPANY_ID,
    logout,
  };

  return (
    <GlobalAppStateContext.Provider value={value}>
      {children}
    </GlobalAppStateContext.Provider>
  );
};
