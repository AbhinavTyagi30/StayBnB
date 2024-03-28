export interface PropertyInterface {
  id: string;
  name: string;
  description: string;
  images: string[];
  price: number;
  guestFavorite: boolean;
  rating: {
    average: number;
    total: number;
  };
}
