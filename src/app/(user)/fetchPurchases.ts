import { ProductCardProps } from '@/types/product';

const fetchPurchases = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/users/purchases`, { next: { revalidate: 3600 } });

    if (!res.ok) {
      throw new Error(`Ошибка при получении покупок`);
    }

    const purchases: ProductCardProps[] = await res.json();

    return purchases;
  } catch (e) {
    console.error('Ошибка получения покупок:', e);
    throw e;
  }
};

export default fetchPurchases;
