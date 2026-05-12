import { ViewAllButton } from '@/components/ViewAllButton';
import { ProductCard } from '@/components/ProductCard';
import { ProductsSectionProps } from '@/types/productsSection';

export const ProductsSection = ({ title, products, viewAllButton: { btnText, href }, isLimited = false }: ProductsSectionProps) => {
  const sectionClassName = `flex flex-col ${isLimited ? '' : 'mt-20 px-[max(12px,calc((100%-1208px)/2))]'}`;

  return (
    <section>
      <div className={sectionClassName}>
        <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
          <h2 className="text-2xl xl:text-4xl text-left font-bold text-[#414141]">
            {title}
          </h2>
          <ViewAllButton btnText={btnText} href={href}/>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10 justify-items-center">
          {products.map((item, index) => (
            <li
              key={item._id}
              className={
                isLimited
                  ? `${index >= 4 ? "hidden" : ""}
                ${index >= 3 ? "md:hidden xl:block" : ""}
                ${index >= 4 ? "xl:hidden" : ""}`
                  : ""
              }>
              <ProductCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
