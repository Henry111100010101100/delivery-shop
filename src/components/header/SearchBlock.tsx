import { CatalogButton } from '@/components/header/CatalogButton';
import { InputBlock } from '@/components/header/InputBlock';

export const SearchBlock = () => (
  <div className='flex flex-row gap-4 flex-grow'>
    <CatalogButton/>
    <InputBlock/>
  </div>
);
