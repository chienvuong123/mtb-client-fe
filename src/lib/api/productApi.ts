import { useGlobalAppState } from '@/providers/app/useGlobalAppState';
import { IPaginate } from '@/types/server';
import { useQuery, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

// Định nghĩa kiểu dữ liệu sản phẩm
export interface IProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  status: 'ACTIVE' | 'INACTIVE';
  created_at: string;
  updated_at: string;
}

// Tham số để lấy danh sách sản phẩm
export interface ProductListParams {
  page?: number;
  size?: number;
  search?: string;
  category?: string;
  status?: string;
}

// Key cho react-query
export const PRODUCT_QUERY_KEYS = {
  list: 'products-list',
  detail: 'product-detail',
} as const;

/**
 * Hook lấy danh sách sản phẩm
 */
export const useListProducts = (params: ProductListParams) => {
  const { axiosInstance, API_ROUTES_COMPANY } = useGlobalAppState();

  return useQuery<AxiosResponse<IPaginate<IProduct>>>({
    queryKey: [PRODUCT_QUERY_KEYS.list, params],
    queryFn: () =>
      axiosInstance.get(API_ROUTES_COMPANY.product?.list || '/products', {
        params,
      }),
  });
};

/**
 * Hook tạo sản phẩm mới
 */
export const useCreateProduct = () => {
  const { axiosInstance, API_ROUTES_COMPANY } = useGlobalAppState();

  return useMutation<
    AxiosResponse<IProduct>,
    Error,
    Omit<IProduct, 'id' | 'created_at' | 'updated_at'>
  >({
    mutationFn: (newProduct) => {
      return axiosInstance.post(
        API_ROUTES_COMPANY.product?.create || '/products',
        newProduct,
      );
    },
  });
};

/**
 * Hook cập nhật sản phẩm
 */
export const useUpdateProduct = () => {
  const { axiosInstance, API_ROUTES_COMPANY } = useGlobalAppState();

  return useMutation<
    AxiosResponse<IProduct>,
    Error,
    {
      id: string;
      data: Partial<Omit<IProduct, 'id' | 'created_at' | 'updated_at'>>;
    }
  >({
    mutationFn: ({ id, data }) => {
      return axiosInstance.put(
        `${API_ROUTES_COMPANY.product?.update || '/products'}/${id}`,
        data,
      );
    },
  });
};

/**
 * Hook xóa sản phẩm
 */
export const useDeleteProduct = () => {
  const { axiosInstance, API_ROUTES_COMPANY } = useGlobalAppState();

  return useMutation<AxiosResponse<void>, Error, string>({
    mutationFn: (id) => {
      return axiosInstance.delete(
        `${API_ROUTES_COMPANY.product?.delete || '/products'}/${id}`,
      );
    },
  });
};

/**
 * Hook lấy chi tiết một sản phẩm
 */
export const useGetProductDetail = (id: string) => {
  const { axiosInstance, API_ROUTES_COMPANY } = useGlobalAppState();

  return useQuery<AxiosResponse<IProduct>>({
    queryKey: [PRODUCT_QUERY_KEYS.detail, id],
    queryFn: () =>
      axiosInstance.get(
        `${API_ROUTES_COMPANY.product?.detail || '/products'}/${id}`,
      ),
    enabled: !!id,
  });
};
