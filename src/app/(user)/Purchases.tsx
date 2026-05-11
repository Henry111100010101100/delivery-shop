import { ProductsSection } from '@/components/ProductsSection';
import fetchPurchases from '@/app/(user)/fetchPurchases';

export const Purchases = async () => {
  try {
    const fetchedPurchases = await fetchPurchases();

    return (<ProductsSection title="Покупали раньше" products={fetchedPurchases} viewAllButton={{ btnText: 'Все покупки', href: '/purchases' }} isLimited /> );
  } catch {
    return <div className='text-red-500'>Ошибка: не удалось загрузить покупки</div>;
  }

};
