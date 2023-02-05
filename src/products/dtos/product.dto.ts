import CharacteristicsDTO from './characteristics.dto';
import ImageDTO from './image.dto';

export default class ProductDTO {
  name: string;
  price: number;
  description: string;
  amountAvailable: number;
  category: string;
  created_at: string;
  updated_at: string;
  characteristics: CharacteristicsDTO[];
  images: ImageDTO[];
}
