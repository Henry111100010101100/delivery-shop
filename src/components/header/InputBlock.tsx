import Image from 'next/image';
import iconSearch from '/public/icons/header/icon-search.svg'

export const InputBlock = () => {
  return (
    <div className='relative min-w-[261px] flex-grow'>
      <input type='text' placeholder='Найти товар'
             className='w-full h-10 p-2 rounded outline outline-(--color-primary) focus:shadow(--shadow-button-hover) text-[#8F8F8F] text-base leading-[150%]'/>
      <button className='absolute top-2 right-2 cursor-pointer'>
        <Image src={iconSearch} alt='Поиск' width={24} height={24}/>
      </button>
    </div>
  )
}
