import Image from 'next/image';
import iconMenuMobile from '/public/icons/header/icon-menu-mobile.svg';
import iconHeart from '/public/icons/header/icon-heart.svg';
import iconBox from '/public/icons/header/icon-box.svg';
import iconCart from '/public/icons/header/icon-cart.svg';
import Link from 'next/link';

const menuItems = [
  {
    name: 'Menu',
    label: 'Каталог',
    path: iconMenuMobile,
  },
  {
    name: 'Heart',
    label: 'Избранное',
    path: iconHeart,
  },
  {
    name: 'Box',
    label: 'Заказы',
    path: iconBox,
  },
  {
    name: 'Cart',
    label: 'Корзина',
    path: iconCart,
  },
];

const LIST_ITEM_CLASSNAME = 'flex flex-col items-center gap-2.5 w-11 cursor-pointer';
const MENU_MOBILE_SPECIAL_CLASSNAME = 'md:hidden';

export const TopMenu = () => {
  return(
    <ul className="flex flex-row gap-x-6 items-end">
      {menuItems.map(({ name, label, path }) => (
        <li key={name} className={`${LIST_ITEM_CLASSNAME}${name === 'Menu' ? ` ${MENU_MOBILE_SPECIAL_CLASSNAME}` : ''}`}>
          <Link href="/">
            <Image
              src={path}
              alt={label}
              width={24}
              height={24}
              className="object-contain w-6 h-6"
            />
          </Link>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  )
};
