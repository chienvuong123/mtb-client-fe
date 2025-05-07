export type Size = {
  id: string;
  name: string;
};

export type Color = {
  id: string;
  color: string;
  color_img: string;
};

export type ProductImage = {
  id: string;
  color_id: string;
  image_url: string;
  image_hover: string;
  is_main: string;
  product_id: string;
  color: Color;
};

export interface IProduct {
  id: string;
  name: string;
  avg_rating: string;
  description: string;
  discount_price?: string;
  original_price: string;
  discount?: string;
  isNew?: boolean;
  product_images: ProductImage[];
  product_material_id: string;
  product_style_id: string;
  rating_count: string;
  size: Size[];
  slug: string;
  color: Color[];
}
