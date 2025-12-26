export interface ProductCardProps {
  _id: number;
  id: number;
  img: string;
  title: string;
  description: string;
  defaultPrice: number;
  discountPercent?: number;
  categories: string[];
  rating: number;
  weight?: string;
  volume?: string;
}
