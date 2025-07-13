import Image from 'next/image';
import avatar from '/public/images/graphics/avatar.png';
import iconArrow from '/public/icons/header/icon-arrow.svg';

export const Profile = () => {
  return (
    <div className='ml-6 p-2 flex flex-1 justify-end items-center gap-2.5'>
      <Image src={avatar} alt='Ваш профиль' width={40} height={40} className='min-w-10 min-h-10'/>
      <p className='hidden xl:block cursor-pointer p-2.5'>Алексей</p>
      <button className='hidden xl:block cursor-pointer p-2'>
        <Image src={iconArrow} alt='Меню профиля' height={24} width={24} sizes='24px'/>
      </button>
    </div>
  )
};
