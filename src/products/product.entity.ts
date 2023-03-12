import { CharacteristicEntity } from './characteristic.entity';
import { ImageEntity } from './image.entity';

export class ProductEntity {
  id: string;
  userId: string;
  name: string;
  price: number;
  description: string;
  amountAvailable: number;
  category: string;
  characteristics: CharacteristicEntity[];
  images: ImageEntity[];
  created_at: string;
  updated_at: string;
}
