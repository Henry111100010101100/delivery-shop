import { ProductCard } from "./ProductCard";
import { ProductCardProps } from '@/types/product';
import { shuffleArray } from '@/utils/shuffleArray';
import { ViewAllButton } from '@/components/ViewAllButton';

export const Actions = async () => {
  let products: ProductCardProps[] = [];
  let error = null;

  try {
    const fetchedProducts = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/products?category=actions`)
    products = await fetchedProducts.json();
    products = shuffleArray(products);
  } catch (e) {
    error = 'Ошибка при получении акционных продуктов';
    console.error('Ошибка в компоненте Actions', e);
  }

  if (error) {
    return <div className='text-red-500'>{`${error} в компоненте Actions`}</div>
  }

  return (
    <section>
      <div className="flex flex-col justify-center xl:max-w-[1208px]">
        <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
          <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">Акции</h2>
          <ViewAllButton btnText={"Все акции"} href={"actions"} imgAlt={"К акциям"}/>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
          {products.slice(0, 4).map((product, index) => (
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
