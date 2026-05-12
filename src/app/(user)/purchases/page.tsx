import { ProductsSection } from '@/components/ProductsSection';
import fetchPurchases from '@/app/(user)/fetchPurchases';

const AllUserPurchases = async () => {
  try {
    const fetchedProducts = await fetchPurchases();

    return (<ProductsSection title="Все покупки" products={fetchedProducts} viewAllButton={{ btnText: 'На главную', href: '/' }} /> );
  } catch {
    return <div className='text-red-500'>Ошибка: не удалось загрузить все покупки</div>;
  }

};

export default AllUserPurchases;
