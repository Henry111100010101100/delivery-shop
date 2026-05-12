import Image from 'next/image';
import iconArrow from "/public/icons/icon-arrow.svg";
import Link from 'next/link';

export interface ViewAllButtonProps {
  btnText: string;
  href: string;
}

export const ViewAllButton = ({ btnText, href }: ViewAllButtonProps) => {
  return (
    <Link href={href} className="flex flex-row items-center gap-x-2 cursor-pointer">
      <p className="text-base text-center text-[#606060] hover:text-[#bfbfbf] duration-300">
        {btnText}
      </p>
      <Image
        src={iconArrow}
        alt={btnText}
        width={24}
        height={24}
        sizes="24px"
        className='rotate-270'
      />
    </Link>
  );
};
