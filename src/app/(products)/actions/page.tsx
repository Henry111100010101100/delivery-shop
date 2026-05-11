import fetchProducts from '@/app/(products)/fetchProducts';
import { ProductsSection } from '@/components/ProductsSection';

const AllActions = async () => {
  try {
    const fetchedProducts = await fetchProducts('actions');

    return (<ProductsSection title="Все акции" products={fetchedProducts} viewAllButton={{ btnText: 'На главную', href: '/' }} /> );
  } catch {
    return <div className='text-red-500'>Ошибка в компоненте AllActions</div>;
  }

};

export default AllActions;
