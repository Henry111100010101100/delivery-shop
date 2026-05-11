import { ProductCard } from '@/components/ProductCard';
import { ProductCardProps } from '@/types/product';
import { shuffleArray } from '@/utils/shuffleArray';
import { ViewAllButton } from '@/components/ViewAllButton';

export const NewProducts = async () => {
  let newProducts: ProductCardProps[] = [];
  let error = null;

  try {
    const fetchedProducts = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/products?category=new`);
    newProducts = await fetchedProducts.json();
    newProducts = shuffleArray(newProducts);
  } catch (e) {
    error = 'Ошибка при получении новых продуктов';
    console.error('Ошибка в компоненте NewProducts', e);
  }

  if (error) {
    return <div className='text-red-500'>{`${error} в компоненте NewProducts`}</div>;
  }

  return (
    <section>
      <div className="flex flex-col justify-center xl:max-w-[1208px]">
        <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
          <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">Новинки</h2>
          <ViewAllButton btnText={"Все новинки"} href={"new"}/>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
          {newProducts.slice(0, 4).map((product, index) => (
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
