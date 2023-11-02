import { ICartItem } from './product-cart-item';

export type IQuantityActionButton = Pick<ICartItem, 'handleIncrease' | 'handleDecrease' | 'quantity'>;
