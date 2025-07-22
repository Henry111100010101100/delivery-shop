export interface Shop {
  id: number;
  coordinates: [number, number];
  name: string;
}

export interface Location {
  name: string;
  center: [number, number];
  shops: Shop[];
}

export interface Locations {
  [key: string]: Location;
}
