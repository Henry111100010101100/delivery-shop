import Image from 'next/image';

export const CatalogButton = () => {
  return (
    <button
      className='bg-(--color-primary) hover:shadow(--shadow-button-hover) active:shadow(--shadow-button-active) hidden md:flex w-10 cursor-pointer p-2 gap-4 rounded lg:w-35 duration-300'>
      <Image src='/icons/header/icon-menu.svg' alt='Каталог' width={24} height={24} className='hidden md:block'/>
      <span className='text-base text-white hidden lg:block'>Каталог</span>
    </button>
  )
}
