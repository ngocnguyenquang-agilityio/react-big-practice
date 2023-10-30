// Helpers
import { convertToSkip, isEmpty } from './utils';

interface IAPIEndpoint {
  standingPage?: null | string;
  searchKeyword?: null | string;
  productId?: null | string;
  category?: null | string;
}

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

export function dynamicSort(property: any) {
  var sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    /* next line works with strings and numbers,
     * and you may want to customize it to your needs
     */
    var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

export const descendingSort = (property: string) => {
  let sortOrder = 1;
  if (property[0] === '-') {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    var result = a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
};
