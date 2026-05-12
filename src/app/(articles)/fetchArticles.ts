import { Article } from '@/types/articles';

const fetchArticles = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL!}/api/articles`, { next: { revalidate: 3600 } });

    if (!res.ok) {
      throw new Error(`Ошибка при получении статей`);
    }

    const articles: Article[] = await res.json();

    return articles;
  } catch (e) {
    console.error('Ошибка получения статей:', e);
    throw e;
  }
};

export default fetchArticles;
