import fetchProducts from '@/app/(products)/fetchProducts';
import { ProductsSection } from '@/components/ProductsSection';

export const NewProducts = async () => {
  try {
    const fetchedProducts = await fetchProducts('new');

    return (<ProductsSection title="Новинки" products={fetchedProducts} viewAllButton={{ btnText: 'Все новинки', href: '/new' }} isLimited /> );
  } catch {
    return <div className='text-red-500'>Ошибка в компоненте NewProducts</div>;
  }

};
