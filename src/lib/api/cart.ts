import { apiClient } from '../react-query/api-client';
import { Cart, CartItem } from './types';

export const cartApi = {
  // Lấy giỏ hàng
  getCart: async (): Promise<Cart> => {
    const response = await apiClient.get<Cart>('/cart');
    return response.data;
  },

  // Thêm sản phẩm vào giỏ hàng
  addToCart: async (item: Omit<CartItem, 'id'>): Promise<Cart> => {
    const response = await apiClient.post<Cart>('/cart/items', item);
    return response.data;
  },

  // Cập nhật số lượng sản phẩm
  updateCartItem: async (itemId: number, quantity: number): Promise<Cart> => {
    const response = await apiClient.put<Cart>(`/cart/items/${itemId}`, {
      quantity,
    });
    return response.data;
  },

  // Xóa sản phẩm khỏi giỏ hàng
  removeFromCart: async (itemId: number): Promise<Cart> => {
    const response = await apiClient.delete<Cart>(`/cart/items/${itemId}`);
    return response.data;
  },

  // Xóa toàn bộ giỏ hàng
  clearCart: async (): Promise<void> => {
    await apiClient.delete('/cart');
  },
};
