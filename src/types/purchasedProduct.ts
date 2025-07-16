import { ProductCardProps } from '@/types/product';

export type PurchasedProductType = Omit<ProductCardProps, 'discountPercent'>
