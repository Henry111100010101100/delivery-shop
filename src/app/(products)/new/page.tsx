import fetchProducts from '@/app/(products)/fetchProducts';
import { ProductsSection } from '@/components/ProductsSection';

const AllNewProducts = async () => {
  try {
    const fetchedProducts = await fetchProducts('new');

    return (<ProductsSection title="Все новинки" products={fetchedProducts} viewAllButton={{ btnText: 'На главную', href: '/' }} /> );
  } catch {
    return <div className='text-red-500'>Ошибка в компоненте AllNewProducts</div>;
  }

};

export default AllNewProducts;
