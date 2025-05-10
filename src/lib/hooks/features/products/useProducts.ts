'use client';

import { useCustomQuery } from '../../common/useCustomQuery';
import { productEndpoints } from '../../../api/endpoints/products';

export const useProducts = () => {
  // Query để lấy danh sách sản phẩm
  const { data: products, isLoading } = useCustomQuery(
    ['products'],
    productEndpoints.getProducts,
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
    () => productEndpoints.getProduct(id),
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
    () => productEndpoints.searchProducts(query),
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
    () => productEndpoints.getProductsByCategory(category),
    {
      enabled: !!category,
    },
  );

  return {
    categoryProducts,
    isLoading,
  };
};
