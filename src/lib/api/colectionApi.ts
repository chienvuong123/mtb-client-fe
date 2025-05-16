import { useGlobalAppState } from '@/providers/app/useGlobalAppState';
import { IProduct } from '@/types/ProductType';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

// Key cho react-query
export const DISCOUNT_QUERY_KEYS = {
  list: 'colection-list',
} as const;

export const useListColections = () => {
  const { axiosInstance, API_ROUTES_COMPANY } = useGlobalAppState();

  return useQuery<AxiosResponse<IProduct[]>>({
    queryKey: [DISCOUNT_QUERY_KEYS.list],
    queryFn: () =>
      axiosInstance.get(API_ROUTES_COMPANY.collection.list || '/collections'),
  });
};
