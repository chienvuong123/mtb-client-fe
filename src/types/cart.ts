export interface CartItem {
  id: number;
  productId: number;
  quantity: number;
  price: number;
  name: string;
  image: string;
}

export interface Cart {
  id: number;
  items: CartItem[];
  total: number;
}

export interface Size {
  value: string;
  lable: string;
}
export interface Color {
  value: string;
  lable: string;
}

export interface Product {
  id: string;
  color: string;
  discount_price: number;
  id_color: string;
  id_size: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
}

export interface ProductCart {
  id: string;
  product_cart: Product;
  color: Color[];
  size: Size[];
}
