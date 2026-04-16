import Image from "next/image";
import { JSX } from 'react';
import iconArrow from "/public/icons/icon-arrow.svg";
import { PurchasedProductType } from '@/types/purchasedProduct';
import { ProductCard } from "./ProductCard";

export const Purchases = async (): Promise<JSX.Element> => {

  let purchasedProducts: PurchasedProductType[] = [];
  let error = null;

  try {
    const fetchedPurchases = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/users/purchases`);
    purchasedProducts = await fetchedPurchases.json();
  } catch (e) {
    error = 'Ошибка при получении покупок пользователя';
    console.error('Ошибка в компоненте Purchases', e);
  }

  if (error) {
    return <div className='text-red-500'>{`${error} в компоненте Purchases`}</div>
  }

  return (
    <section>
      <div className="flex flex-col justify-center xl:max-w-[1208px]">
        <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
          <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">Покупали раньше</h2>
          <button className="flex flex-row items-center gap-x-2 cursor-pointer">
            <p className="text-base text-center text-[#606060] hover:text-[#bfbfbf] duration-300">
              Все покупки
            </p>
            <Image
              src={iconArrow}
              alt="К новинкам"
              width={24}
              height={24}
              sizes="24px"
              className='rotate-270'
            />
          </button>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
          {purchasedProducts.slice(0, 4).map((product, index) => (
            <li
              key={product._id}
              className={
                index >= 4
                  ? "hidden xl:block"
                  : index >= 3
                    ? "md:hidden xl:block"
                    : ""
              }
            >
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
