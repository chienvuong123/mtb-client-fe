import { useCustomQuery } from './useCustomQuery';
import { productsApi } from '../api/products';

export const useProducts = () => {
  // Query để lấy danh sách sản phẩm
  const { data: products, isLoading } = useCustomQuery(
    ['products'],
    productsApi.getProducts,
  );

  return {
    products,
    isLoading,
  };
};

export const useProduct = (id: number) => {
  // Query để lấy chi tiết sản phẩm
  const { data: product, isLoading } = useCustomQuery(
    ['products', id],
    () => productsApi.getProduct(id),
    {
      enabled: !!id,
    },
  );

  return {
    product,
    isLoading,
  };
};

export const useSearchProducts = (query: string) => {
  // Query để tìm kiếm sản phẩm
  const { data: searchResults, isLoading } = useCustomQuery(
    ['products', 'search', query],
    () => productsApi.searchProducts(query),
    {
      enabled: !!query,
    },
  );

  return {
    searchResults,
    isLoading,
  };
};

export const useProductsByCategory = (category: string) => {
  // Query để lấy sản phẩm theo danh mục
  const { data: categoryProducts, isLoading } = useCustomQuery(
    ['products', 'category', category],
    () => productsApi.getProductsByCategory(category),
    {
      enabled: !!category,
    },
  );

  return {
    categoryProducts,
    isLoading,
  };
};
