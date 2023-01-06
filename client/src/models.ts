export interface Isityes {
  name: string;
  count: number;
}

export interface Iflat {
  _id: string;
  price: number;
  people: string;
  rooms: number;
  square: number;
  sity: string;
  adress: string;
  metro: string;
  department: string;
  flatImage: string;
  golg: boolean;
}
export interface Inews {
  _id: string;
  title: string;
  text: string[];
  image: string;
  date: string;
  subTitle: string;
}
export interface Isearch {
  title: string;
  _id: string;
}
