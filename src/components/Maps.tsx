"use client";

import {YMaps, Map, Placemark} from '@iminside/react-yandex-maps';
import { useState } from 'react';

const shopsLocations = {
  "rostov-on-Don":
    {
      name: 'Ростов-на-Дону',
      center: [47.222043, 39.720120],
      shops: [{id: 1, coordinates: [47.224926, 39.714841], name: 'Магазин на Пушкинской'}],
    },
  "bataysk":
    {
      name: 'Батайск',
      center: [47.137599, 39.744028],
      shops: [{id: 2, coordinates: [47.141271, 39.728960], name: 'Магазин на Заводской'}],
    },
  "aksay":
    {
      name: 'Аксай',
      center: [47.269996, 39.862373],
      shops: [{id: 3, coordinates: [47.271400, 39.862354], name: 'Магазин на Ленина'}],
    },
  "mozdok":
    {
      name: 'Моздок',
      center: [43.735494, 44.653890],
      shops: [
        {id: 4, coordinates: [43.728991, 44.659848], name: 'Магазин на Октябрьской'},
        {id: 5, coordinates: [43.733048, 44.658232], name: 'Магазин на Армянской'}
      ],
    },
}

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
            {Object.keys(shopsLocations).map((key) => (
              <button key={key} onClick={() => setCurrentLocation(key)}>
                {shopsLocations[key].name}
              </button>
            ))}
          </div>
            <Map defaultState={{center: currentLocationData.center, zoom: 12}} state={{center: currentLocationData.center, zoom: 12 }}  width="100%" height="354px">
              <Placemark geometry={[55.684758, 37.738521]}/>
            </Map>
          </div>
      </section>
    </YMaps>
);
}
