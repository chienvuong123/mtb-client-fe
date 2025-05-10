import { apiClient } from '../client';
import { Cart, CartItem } from '../types';

export const cartEndpoints = {
  getCart: () => apiClient.get<Cart>('/cart'),

  addToCart: (item: Omit<CartItem, 'id'>) =>
    apiClient.post<Cart>('/cart/items', item),

  updateCartItem: (itemId: number, quantity: number) =>
    apiClient.put<Cart>(`/cart/items/${itemId}`, { quantity }),

  removeFromCart: (itemId: number) =>
    apiClient.delete<Cart>(`/cart/items/${itemId}`),

  clearCart: () => apiClient.delete('/cart'),
};
