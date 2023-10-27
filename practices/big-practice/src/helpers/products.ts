// Helpers
import { convertToSkip } from './utils';

interface IAPIEndpoint {
  standingPage?: null | string;
  searchKeyword?: null | string;
  productId?: null | string;
  category?: null | string;
}

/**
 * Check whether the param has value or not
 * @param value
 * @returns
 */
const isEmpty = (value: string | null | undefined) => {
  return !value || value.length === 0;
};

/**
 * Build products query endpoint
 * @param {IAPIEndpoint}
 * @returns {string}
 */
export const buildQueryProductEndpoint = ({ standingPage, searchKeyword, productId, category }: IAPIEndpoint) => {
  switch (true) {
    case !isEmpty(searchKeyword):
      return `/search?q=${searchKeyword}`;

    case !isEmpty(standingPage):
      return `?limit=9&skip=${convertToSkip(standingPage!)}&select=title,price,images,category,thumbnail,id`;

    case !isEmpty(category):
      return `/category/${category}`;

    case !isEmpty(productId):
      return `/${productId}`;

    default:
      return `?limit=9&skip=0&select=title,price,images,category,thumbnail,id`;
  }
};
