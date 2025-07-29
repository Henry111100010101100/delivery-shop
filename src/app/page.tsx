import { Slider } from '@/components/slider/Slider';
import { Actions } from '@/components/Actions';
import { NewProducts } from '@/components/NewProducts';
import { Purchases } from '@/components/Purchases';
import { SpecialOffers } from '@/components/SpecialOffers';
import { Maps } from '@/components/Maps';
import { Articles } from '@/components/Articles';

export default function Home() {
  return (
    <main className="w-full mx-auto mb-20">
      <Slider/>
      <div className="px-[max(12px, calc((100%-1208px)/2))] flex flex-col gap-y-20 md:mb-25 xl:mb-30">
        <Actions/>
        <NewProducts/>
        <Purchases/>
        <SpecialOffers/>
        <Maps/>
        <Articles/>
      </div>
    </main>
  );
}
