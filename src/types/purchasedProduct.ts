import { ProductCardProps } from '@/types/product';

export type PurchasedProductType = Omit<ProductCardProps, 'discountPercent'>

export interface UserPurchase {
  id: number;
  date: string;
}
