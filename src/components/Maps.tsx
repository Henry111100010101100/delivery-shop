"use client";

import { useState } from 'react';
import {YMaps, Map, Placemark} from '@iminside/react-yandex-maps';
import {shopsLocations} from '@/data/locations';


export const Maps = () => {

  const [currentLocation, setCurrentLocation] = useState<string>("rostov-on-Don");
  const currentLocationData = shopsLocations[currentLocation];

  return (
    <YMaps query={{lang:"ru_RU"}}>
      <section>
        <div className="flex flex-col justify-center xl:max-w-[1208px] text-[#414141]">
          <h2 className="mb-4 md:mb-8 xl:mb-10 text-2xl xl:text-4xl text-left font-bold">
            Наши магазины
          </h2>
          <div className="flex flex-wrap gap-x-2 gap-y-3 mb-5">
            {Object.keys(shopsLocations).map((key) => {
              const isActive = currentLocation === key;
              return (
                <button
                  key={key}
                  onClick={() => setCurrentLocation(key)}
                  className={`p-2 text-xs justify-center items-center active:shadow-(--shadow-button-active) border-none rounded cursor-pointer transition-colors duration-300 ${
                    isActive
                      ? "bg-(--color-primary) text-white hover: shadow-(--shadow-button-hover)"
                      : "bg-[#f3f2f1] hover:shadow-(--shadow-button-secondary)"
                  }`}
                >
                  {shopsLocations[key].name}
                </button>
              );
            })}
          </div>
            <Map defaultState={{center: currentLocationData.center, zoom: 12}} state={{center: currentLocationData.center, zoom: 12 }}  width="100%" height="354px">
              <Placemark geometry={[55.684758, 37.738521]}/>
            </Map>
          </div>
      </section>
    </YMaps>
);
}
