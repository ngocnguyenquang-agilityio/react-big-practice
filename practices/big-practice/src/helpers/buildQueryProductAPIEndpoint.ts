interface IAPIEndpoint {
  skip?: number;
  query?: string;
  productId?: number;
  category?: string;
}

export const buildAPIEndpoint = ({ skip = 0, query, productId, category }: IAPIEndpoint) => {
  let endpoint = '';

  if (query) {
    return (endpoint = `/search?q=${query}`);
  }

  if (productId) {
    return `/${productId}`;
  }

  if (category) {
    return (endpoint = `/category/${category}`);
  }

  return (endpoint = `?limit=9&skip=${skip}&select=title,price,images,category,thumbnail,id`);

  // switch (endpoint) {
  //   case skip.toString():
  //     endpoint = `?limit=9&skip=${skip}&select=title,price,images,category,thumbnail,id`;
  //     break;

  //   case query:
  //     endpoint = `/search?q=${query}`;
  //     break;

  //   case category:
  //     endpoint = `/category/${category}`;
  //     break;

  //   case productId?.toString():
  //     endpoint = `/${productId}`;
  //     break;

  //   default:
  //     endpoint = `?limit=9&skip=0&select=title,price,images,category,thumbnail,id`;
  // }

  // return endpoint;
};
