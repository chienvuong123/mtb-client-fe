import { useCustomQuery } from './useCustomQuery';
import { useCustomMutation } from './useCustomMutation';
import { cartApi } from '../api/cart';

export const useCart = () => {
  // Query để lấy giỏ hàng
  const { data: cart, isLoading } = useCustomQuery(['cart'], cartApi.getCart);

  // Mutation để thêm sản phẩm vào giỏ hàng
  const { mutate: addToCart, isPending: isAdding } = useCustomMutation(
    cartApi.addToCart,
    {
      invalidateQueries: ['cart'],
    },
  );

  // Mutation để cập nhật số lượng
  const { mutate: updateQuantity, isPending: isUpdating } = useCustomMutation(
    ({ itemId, quantity }: { itemId: number; quantity: number }) =>
      cartApi.updateCartItem(itemId, quantity),
    {
      invalidateQueries: ['cart'],
    },
  );

  // Mutation để xóa sản phẩm
  const { mutate: removeItem, isPending: isRemoving } = useCustomMutation(
    cartApi.removeFromCart,
    {
      invalidateQueries: ['cart'],
    },
  );

  // Mutation để xóa toàn bộ giỏ hàng
  const { mutate: clearCart, isPending: isClearing } = useCustomMutation(
    cartApi.clearCart,
    {
      invalidateQueries: ['cart'],
    },
  );

  return {
    cart,
    isLoading,
    addToCart,
    isAdding,
    updateQuantity,
    isUpdating,
    removeItem,
    isRemoving,
    clearCart,
    isClearing,
  };
};
