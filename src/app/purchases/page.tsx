import { ProductCard } from '@/components/ProductCard';
import { ViewAllButton } from '@/components/ViewAllButton';
import { JSX } from 'react';
import { PurchasedProductType } from '@/types/purchasedProduct';

const AllUserPurchases = async (): Promise<JSX.Element> => {
  let purchasedProducts: PurchasedProductType[] = [];
  let error = null;

  try {
    const fetchedPurchases = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/users/purchases`);
    purchasedProducts = await fetchedPurchases.json();
  } catch (e) {
    error = 'Ошибка при получении всех покупок пользователя';
    console.error('Ошибка в компоненте AllUserPurchases', e);
  }

  if (error) {
    return <div className='text-red-500'>{`${error} в компоненте AllUserPurchases`}</div>
  }

  return (
    <section>
      <div className="mt-20 px-[max(12px,calc((100%-1208px)/2))] flex flex-col">
        <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
          <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">Все покупки</h2>
          <ViewAllButton btnText={"На главную"} href={"/"} imgAlt={"На главную"}/>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
          {purchasedProducts.map(product => (
            <li key={product._id}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AllUserPurchases;
