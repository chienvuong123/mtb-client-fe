export interface IDiscountDto {
  id: string;
  code: string;
  description: string;
  discount_type: 'percentage' | 'fixed_amount';
  discount_value: number;
  max_discount: number;
  min_order_value: number;
  quantity: number;
  used_count: number;
  start_date: string;
  end_date: string;
  is_active: boolean;
  applicable_users: string[];
  available_quantity: number;
  created_at: string;
  updated_at: string;
}
