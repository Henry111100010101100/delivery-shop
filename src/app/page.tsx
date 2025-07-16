import { Slider } from '@/components/slider/Slider';
import { Actions } from '@/components/Actions';
import { NewProducts } from '@/components/NewProducts';
import { Purchases } from '@/components/Purchases';

export default function Home() {
  return (
    <main>
      <Slider/>
      <div className={'px-[max(12px, calc((100%-1208px)/2))] flex flex-col gap-y-20 md:mb-25 xl:mb-30'}>
        <Actions/>
        <NewProducts/>
        <Purchases/>
      </div>
    </main>
  );
}
