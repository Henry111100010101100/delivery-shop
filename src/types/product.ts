export interface ProductCardProps {
  _id: number;
  id: number;
  img: string;
  title: string;
  description: string;
  basePrice: number;
  discountPercent?: number;
  categories: string[];
  rating: {
    rate: number;
    count: number;
  };
  quantity: number;
  weight?: string;
  volume?: string;
}
