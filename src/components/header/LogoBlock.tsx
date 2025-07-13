import Link from 'next/link';
import Image from 'next/image';

export const LogoBlock = () => (
  <Link href='/' className='flex flex-row gap-3 items-center cursor-pointer'>
    <div className='relative w-10 h-8 md:w-12 md:h-10 xl:w-10 xl:h-8'>
      <Image src='/icons/header/logo-icon.svg' alt='Логотип' fill
             sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'/>
    </div>
    <div className='relative hidden md:block w-25 h-3'>
      <Image
        src='/icons/header/logo-text.png'
        alt='Северяночка'
        fill
        sizes="100px"
      />
    </div>
  </Link>
);
