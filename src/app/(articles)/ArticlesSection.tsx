import { ViewAllButton } from '@/components/ViewAllButton';
import { ArticleCard } from '@/app/(articles)/ArticleCard';
import { ArticleSectionProps } from '@/types/articleSection';

export const ArticlesSection = ({ title, viewAllButton: { btnText, href }, articles, isLimited }: ArticleSectionProps) => {
  const sectionClassName = `flex flex-col text-[#414141] ${isLimited ? '' : 'mt-20 px-[max(12px,calc((100%-1208px)/2))]'}`;

  return (
    <section>
      <div className={sectionClassName}>
        <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
          <h2 className="text-2xl xl:text-4xl text-left font-bold">{title}</h2>
          <ViewAllButton btnText={btnText} href={href}/>
        </div>

        {/* Список статей */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <li key={article._id} className={`h-75 md:h-105 ${isLimited
              ? `${index >= 4 ? "hidden" : ""}
                ${index >= 3 ? "md:hidden xl:block" : ""}
                ${index >= 4 ? "xl:hidden" : ""}`
              : ""
            }`}>
              <ArticleCard {...article}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
