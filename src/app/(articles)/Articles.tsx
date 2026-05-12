import fetchArticles from '@/app/(articles)/fetchArticles';
import { ArticlesSection } from '@/app/(articles)/ArticlesSection';

export const Articles = async () => {
  try {
    const fetchedArticles = await fetchArticles();

    return (<ArticlesSection title="Статьи" articles={fetchedArticles} viewAllButton={{ btnText: 'Все статьи', href: '/articles' }} isLimited /> );
  } catch {
    return <div className='text-red-500'>Ошибка: не удалось загрузить статьи</div>;
  }
};
