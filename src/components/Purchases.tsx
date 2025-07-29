import Image from "next/image";
import { JSX } from 'react';
import iconArrow from "/public/icons/icon-arrow.svg";
import database from "@/data/database.json";
import { PurchasedProductType } from '@/types/purchasedProduct';
import { ProductCard } from "./ProductCard";
import { ProductCardProps } from '@/types/product';

export const Purchases = (): JSX.Element => {
  const userPurchases = database.users[0].purchases.reduce<PurchasedProductType[]>((acc, current) => {
    const matchedProduct: ProductCardProps | undefined = database.products.find((product) => product.id === current.id);
    if (matchedProduct) {
      const {discountPercent: _unused, ...purchasedProduct} = matchedProduct;
      acc.push(purchasedProduct);
    }

    return acc;

  }, []);

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
          {userPurchases.slice(0, 4).map((product, index) => (
            <li
              key={product.id}
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
