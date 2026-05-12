import fetchArticles from '@/app/(articles)/fetchArticles';
import { ArticlesSection } from '@/app/(articles)/ArticlesSection';

const AllArticles = async () => {
  try {
    const fetchedArticles = await fetchArticles();

    return (<ArticlesSection title="Все статьи" articles={fetchedArticles} viewAllButton={{ btnText: 'На главную', href: '/' }} /> );
  } catch {
    return <div className='text-red-500'>Ошибка: не удалось загрузить все статьи</div>;
  }
};

export default AllArticles;
