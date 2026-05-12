import { Article } from '@/types/articles';
import { ViewAllButtonProps } from '@/components/ViewAllButton';

export interface ArticleSectionProps {
  title: string;
  articles: Article[];
  viewAllButton: ViewAllButtonProps;
  isLimited?: boolean;
}
