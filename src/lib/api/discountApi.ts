import { useGlobalAppState } from '@/providers/app/useGlobalAppState';
import { IDiscountDto } from '@/types/discountType';
import { useQuery, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

// Key cho react-query
export const DISCOUNT_QUERY_KEYS = {
  list: 'discount-list',
} as const;

export const useListDiscounts = () => {
  const { axiosInstance, API_ROUTES_COMPANY } = useGlobalAppState();

  return useQuery<AxiosResponse<IDiscountDto[]>>({
    queryKey: [DISCOUNT_QUERY_KEYS.list],
    queryFn: () =>
      axiosInstance.get(API_ROUTES_COMPANY.discount.list || '/discounts'),
  });
};

export const useCreateCart = () => {
  const { axiosInstance, API_ROUTES_COMPANY } = useGlobalAppState();

  return useMutation<AxiosResponse<void>, Error, IDiscountDto>({
    mutationFn: (newCartItem) => {
      return axiosInstance.post(
        API_ROUTES_COMPANY.cart?.create || '/carts',
        newCartItem,
      );
    },
  });
};
