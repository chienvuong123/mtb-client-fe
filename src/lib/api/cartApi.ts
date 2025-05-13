import { useGlobalAppState } from '@/providers/app/useGlobalAppState';
import { ProductCart } from '@/types/cart';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

// Key cho react-query
export const CART_QUERY_KEYS = {
  list: 'carts-list',
} as const;

export const useListCarts = () => {
  const { axiosInstance, API_ROUTES_COMPANY } = useGlobalAppState();

  return useQuery<AxiosResponse<ProductCart[]>>({
    queryKey: [CART_QUERY_KEYS.list],
    queryFn: () => axiosInstance.get(API_ROUTES_COMPANY.cart?.list || '/carts'),
  });
};

export const useCreateCart = () => {
  const { axiosInstance, API_ROUTES_COMPANY } = useGlobalAppState();
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<void>, Error, ProductCart>({
    mutationFn: (newCartItem) => {
      return axiosInstance.post(
        API_ROUTES_COMPANY.cart?.create || '/carts',
        newCartItem,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CART_QUERY_KEYS.list] });
    },
  });
};

export const useDeleteCart = () => {
  const { axiosInstance, API_ROUTES_COMPANY } = useGlobalAppState();
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<void>, Error, string>({
    mutationFn: (id) => {
      return axiosInstance.delete(
        `${API_ROUTES_COMPANY.cart?.delete || '/carts'}/${id}`,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CART_QUERY_KEYS.list] });
    },
  });
};
