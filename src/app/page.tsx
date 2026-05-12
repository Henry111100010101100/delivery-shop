import { Slider } from '@/components/slider/Slider';
import { Actions } from '@/app/(products)/Actions';
import { NewProducts } from '@/app/(products)/NewProducts';
import { Purchases } from '@/app/(user)/Purchases';
import { SpecialOffers } from '@/components/SpecialOffers';
import { Maps } from '@/components/Maps';
import { Articles } from '@/app/(articles)/Articles';

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="w-full mx-auto mb-20">
      <Slider/>
      <div className="px-[max(12px,calc((100%-1208px)/2))] flex flex-col gap-y-20 md:mb-25 xl:mb-30">
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
