import { apiClient } from '../react-query/api-client';
import { Product } from './types';

export const productsApi = {
  // Lấy danh sách sản phẩm
  getProducts: async (): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>('/products');
    return response.data;
  },

  // Lấy chi tiết sản phẩm
  getProduct: async (id: number): Promise<Product> => {
    const response = await apiClient.get<Product>(`/products/${id}`);
    return response.data;
  },

  // Tìm kiếm sản phẩm
  searchProducts: async (query: string): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>(
      `/products/search?q=${query}`,
    );
    return response.data;
  },

  // Lấy sản phẩm theo danh mục
  getProductsByCategory: async (category: string): Promise<Product[]> => {
    const response = await apiClient.get<Product[]>(
      `/products/category/${category}`,
    );
    return response.data;
  },
};
