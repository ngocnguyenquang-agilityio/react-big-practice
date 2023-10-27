import { ICartItem } from './cart-item';

export type IQuantityActionButton = Pick<ICartItem, 'handleIncrease' | 'handleDecrease' | 'quantity'>;
