export interface CarDTO {
  id: string;
  name: string;
  brand: string;
  about: string;
  period: string;
  price: number;
  fuel_type: string;
  thumbnail: string;
  created_at: number;
  updated_at: number;
  photos: Array<{
    id: string;
    photo: string;
  }>;
  accessories: Array<{
    id: string;
    name: string;
    type: string;
  }>;
}
