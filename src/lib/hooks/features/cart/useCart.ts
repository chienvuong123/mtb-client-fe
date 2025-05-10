import { useCustomQuery } from '../../common/useCustomQuery';
import { cartEndpoints } from '../../../api/endpoints/cart';
import { useCustomMutation } from '../../common/useCustomMutation';

export const useCart = () => {
  // Query để lấy giỏ hàng
  const { data: cart, isLoading } = useCustomQuery(
    ['cart'],
    cartEndpoints.getCart,
  );

  // Mutation để thêm sản phẩm vào giỏ hàng
  const { mutate: addToCart, isPending: isAdding } = useCustomMutation(
    cartEndpoints.addToCart,
    {
      invalidateQueries: ['cart'],
    },
  );

  // Mutation để cập nhật số lượng
  const { mutate: updateQuantity, isPending: isUpdating } = useCustomMutation(
    ({ itemId, quantity }: { itemId: number; quantity: number }) =>
      cartEndpoints.updateCartItem(itemId, quantity),
    {
      invalidateQueries: ['cart'],
    },
  );

  // Mutation để xóa sản phẩm
  const { mutate: removeItem, isPending: isRemoving } = useCustomMutation(
    cartEndpoints.removeFromCart,
    {
      invalidateQueries: ['cart'],
    },
  );

  // Mutation để xóa toàn bộ giỏ hàng
  const { mutate: clearCart, isPending: isClearing } = useCustomMutation(
    cartEndpoints.clearCart,
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
