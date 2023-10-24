import { IProducts } from './product';

export interface ICartItem {
  product: IProducts;
  quantity?: number;
  handleRemoveItemFromCart: () => void;
  handleDecrease: () => void;
  handleIncrease: () => void;
}
