import { IItemInCart } from './cart-item';

export type IQuantityActionButton = Pick<IItemInCart, 'handleIncrease' | 'handleDecrease' | 'quantity'>;
