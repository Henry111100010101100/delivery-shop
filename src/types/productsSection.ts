import { ProductCardProps } from '@/types/product';
import { ViewAllButtonProps } from '@/components/ViewAllButton';

export interface ProductsSectionProps {
  title: string;
  products: ProductCardProps[];
  viewAllButton: ViewAllButtonProps;
  isLimited?: boolean;
}
