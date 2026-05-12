import fetchProducts from '@/app/(products)/fetchProducts';
import { ProductsSection } from '@/components/ProductsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Акции магазина "Северяночка"',
  description: 'Акционные товары магазина "Северяночка", товары по акции магазина "Северяночка"',
};

const AllActions = async () => {
  try {
    const fetchedProducts = await fetchProducts('actions');

    return (<ProductsSection title="Все акции" products={fetchedProducts} viewAllButton={{ btnText: 'На главную', href: '/' }} /> );
  } catch {
    return <div className='text-red-500'>Ошибка в компоненте AllActions</div>;
  }

};

export default AllActions;
