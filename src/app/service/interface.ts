export interface Address {
  address: string;
  zipcode: number;
  city: string;
  country: string;
}

export interface PlayerType {
  id: number;
  nickname: string;
  origin: string;
  role: string;
  age: number;
  email: string;
  hero: string;
  flag: string;
  imageUrl: string;
  bio: string;
  addresses: Address[];
}
