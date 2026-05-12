import { shuffleArray } from '@/utils/shuffleArray';
import { ProductCardProps } from '@/types/product';

const fetchProducts = async (category: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/products?category=${category}`, { next: { revalidate: 3600 } });

    if (!res.ok) {
      throw new Error(`Ошибка при получении продуктов ${category}`);
    }

    const products: ProductCardProps[] = await res.json();

    const availableProducts = products.filter(
      (product) => product.quantity > 0
    );

    return shuffleArray(availableProducts);
  } catch (e) {
    console.error(`Ошибка в компоненте: ${category}`, e);
    throw e;
  }
};

export default fetchProducts;
