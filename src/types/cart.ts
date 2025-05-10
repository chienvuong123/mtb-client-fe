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
