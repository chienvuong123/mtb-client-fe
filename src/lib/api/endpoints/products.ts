import { apiClient } from '../client';
import { Product } from '../types';

export const productEndpoints = {
  getProducts: () => apiClient.get<Product[]>('/products'),

  getProduct: (id: number) => apiClient.get<Product>(`/products/${id}`),

  searchProducts: (query: string) =>
    apiClient.get<Product[]>(`/products/search?q=${query}`),

  getProductsByCategory: (category: string) =>
    apiClient.get<Product[]>(`/products/category/${category}`),
};
