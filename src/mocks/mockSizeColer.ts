import { commonSizes } from './mockDataHomePage';

interface SizeOption {
  label: string;
  height: string;
  weight: string;
  value: string;
}

interface ColorOption {
  name: string;
  hex: string;
  value: string;
}

export const sizeOptions: SizeOption[] = [
  { label: 'S', value: 'S', height: '1m50 - 1m59', weight: '45kg - 54kg' },
  {
    label: 'M',
    height: '1m60 - 1m65',
    weight: '55kg - 61kg',
    value: 'M',
  },
  {
    label: 'L',
    height: '1m66 - 1m70',
    weight: '62kg - 70kg',
    value: 'L',
  },
  {
    label: 'XL',
    height: '1m71 - 1m75',
    weight: '71kg - 80kg',
    value: 'XL',
  },
  {
    label: '2XL',
    height: '1m76 - 1m80',
    weight: '81kg - 90kg',
    value: '2XL',
  },
  {
    label: '3XL',
    height: '1m81 - 1m85',
    weight: '91kg - 100kg',
    value: '3XL',
  },
  {
    label: '4XL',
    height: '1m86 - 2m00',
    weight: '101kg - 120kg',
    value: '4XL',
  },
];

export const allColors: ColorOption[] = [
  { name: 'Nâu', value: 'brown', hex: '#C19A6B' },
  { name: 'Xám nhạt', value: 'lightGray', hex: '#D3D3D3' },
  { name: 'Kem', value: 'cream', hex: '#F5F5DC' },
  { name: 'Xanh đậm', value: 'darkBlue', hex: '#003366' },
  { name: 'Xanh nhạt', value: 'lightGreen', hex: '#DADEC0' },
  { name: 'Xanh rêu', value: 'oliveGreen', hex: '#3A4B3C' },
  { name: 'Đen', value: 'black', hex: '#000000' },
  { name: 'Trắng', value: 'white', hex: '#FFFFFF' },
  { name: 'Xanh biển', value: 'navy', hex: '#2B3A4D' },
  { name: 'Xám đậm', value: 'darkGray', hex: '#A9A9A9' },
  { name: 'Xanh nhạt', value: 'lightBlue', hex: '#ADD8E6' },
  { name: 'Đỏ đậm', value: 'darkRed', hex: '#8B0000' },
  { name: 'Hồng nhạt', value: 'lightPink', hex: '#FFE4E1' },
  { name: 'Nâu đậm', value: 'darkBrown', hex: '#654321' },
  { name: 'Vàng nhạt', value: 'lightYellow', hex: '#FFFACD' },
  { name: 'Xám đá', value: 'stoneGray', hex: '#696969' },
];

export const product = {
  name: 'Áo thun nam',
  price: '350.000 VND',
  description: 'Áo thun cotton cao cấp, thoáng mát và co giãn tốt.',
  images: [
    {
      id: 1,
      thumbnail: '/images/product-detail/dt-1.webp',
      full: '/images/product-detail/dt-1.webp',
      alt: 'Áo thun màu be',
    },
    {
      id: 2,
      thumbnail: '/images/product-detail/dt-2.webp',
      full: '/images/product-detail/dt-2.webp',
      alt: 'Áo thun màu be',
    },
    {
      id: 3,
      thumbnail: '/images/product-detail/dt-3.webp',
      full: '/images/product-detail/dt-3.webp',
      alt: 'Áo thun màu be',
    },
    {
      id: 4,
      thumbnail: '/images/product-detail/dt-4.webp',
      full: '/images/product-detail/dt-4.webp',
      alt: 'Áo thun màu be',
    },
    {
      id: 5,
      thumbnail: '/images/product-detail/dt-5.webp',
      full: '/images/product-detail/dt-5.webp',
      alt: 'Áo thun màu be',
    },
    {
      id: 6,
      thumbnail: '/images/product-detail/dt-6.webp',
      full: '/images/product-detail/dt-6.webp',
      alt: 'Áo thun màu be',
    },
  ],
};

export const viewedProductData = [
  {
    id: '1',
    title: 'Áo Thun Nam Thể Thao Coolmate Basics',
    price: 99000,
    rating: 4.9,
    reviewCount: 850,
    isBuy: true,
    imageUrl: '/images/t-shirt/cl-1.webp',
    colors: [{ color: 'purple' }, { color: 'lime' }, { color: 'black' }],
    sizes: commonSizes,
    hoverImageUrl: '/images/t-shirt/hv-1.webp',
    type: 'Mặc hàng ngày',
  },
  {
    id: '2',
    title: 'Áo Thun Nam Cotton 220GSM',
    price: 159000,
    originalPrice: 179000,
    discount: 11,
    rating: 5,
    reviewCount: 30,
    imageUrl: '/images/product/pro11.webp',
    colors: [{ color: 'gray' }, { color: 'black' }],
    sizes: commonSizes,
    hoverImageUrl: '/images/t-shirt/hv-2.webp',
    type: 'Thể thao',
  },
  {
    id: '3',
    title: 'Áo Thun Nam Chạy Bộ Graphic Dot',
    price: 169000,
    originalPrice: 199000,
    discount: 15,
    rating: 4.8,
    reviewCount: 12,
    imageUrl: '/images/t-shirt/cl-3.webp',
    colors: [{ color: 'black' }, { color: 'navy' }, { color: 'lime' }],
    sizes: commonSizes,
    hoverImageUrl: '/images/t-shirt/hv-3.webp',
    type: 'Thể thao',
  },
  {
    id: '4',
    title: 'Áo Thun Nam Chạy Bộ Graphic Dot',
    price: 169000,
    originalPrice: 219000,
    discount: 17,
    rating: 4.7,
    reviewCount: 3,
    imageUrl: '/images/t-shirt/cl-4.webp',
    colors: [
      { color: 'gray' },
      { color: 'white' },
      { color: 'olive' },
      { color: 'black' },
    ],
    sizes: commonSizes,
    hoverImageUrl: '/images/t-shirt/hv-4.webp',
    type: 'Thể thao',
  },
  {
    id: '5',
    title: 'Áo Thun Nam Chạy Bộ Graphic Dot',
    price: 169000,
    originalPrice: 219000,
    discount: 17,
    rating: 4.7,
    reviewCount: 3,
    imageUrl: '/images/product/pro10.webp',
    colors: [
      { color: 'gray' },
      { color: 'white' },
      { color: 'olive' },
      { color: 'black' },
    ],
    sizes: commonSizes,
    hoverImageUrl: '/images/t-shirt/hv-4.webp',
    type: 'Thể thao',
  },
  {
    id: '6',
    title: 'Áo Singlet nữ chạy bộ Core Tank',
    price: 189000,
    rating: 4.8,
    reviewCount: 3,
    imageUrl: '/images/product/pro7.webp',
    colors: [
      { color: 'pink' },
      { color: 'purple' },
      { color: 'teal' },
      { color: 'cream' },
      { color: 'black' },
    ],
    sizes: commonSizes,
    hoverImageUrl: '/images/product/pro7.webp',
    type: 'Mặc ở nhà',
  },
];
