import { Locations } from '@/types/shops';

export const shopsLocations: Locations = {
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
