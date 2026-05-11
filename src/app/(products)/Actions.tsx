import fetchProducts from '@/app/(products)/fetchProducts';
import { ProductsSection } from '@/components/ProductsSection';

export const Actions = async () => {
  try {
    const fetchedProducts = await fetchProducts('actions');

    return (<ProductsSection title="Акции" products={fetchedProducts} viewAllButton={{ btnText: 'Все акции', href: '/actions' }} isLimited /> );
  } catch {
    return <div className='text-red-500'>Ошибка в компоненте Actions</div>;
  }

};
