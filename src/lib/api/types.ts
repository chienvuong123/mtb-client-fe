// Cart Types
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

// Product Types
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  stock: number;
}

// Order Types
export interface Order {
  id: number;
  userId: number;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: string;
}
