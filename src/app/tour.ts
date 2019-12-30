export interface Tour {
  id: number;
  rate: number;
  name: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  price: number;
  numberOfLeftPlaces: number;
  numberOfPlaces: number;
  description: string;
  image: string;
}
