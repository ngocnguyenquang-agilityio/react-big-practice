import { buildQueryProductEndpoint } from '@helpers/buildQueryProductAPIEndpoint';
import { convertToSkip } from '@helpers/convertToSkip';

describe('Test helper functions', () => {
  test('buildQueryProductAPIEndpoint without value', () => {
    const test = {
      standingPage: '',
      searchKeyWord: '',
      productId: '',
      category: '',
    };
    const result = buildQueryProductEndpoint(test);
    expect(result).toEqual('?limit=9&skip=0&select=title,price,images,category,thumbnail,id');
  });

  test('buildQueryProductAPIEndpoint with standingPage value', () => {
    const test = {
      standingPage: '1',
      searchKeyWord: '',
      productId: '',
      category: '',
    };
    const result = buildQueryProductEndpoint(test);
    expect(result).toEqual('?limit=9&skip=0&select=title,price,images,category,thumbnail,id');
  });

  test('buildQueryProductAPIEndpoint with searchKeyword value', () => {
    const test = {
      standingPage: '',
      searchKeyword: 'test',
      productId: '',
      category: '',
    };
    const result = buildQueryProductEndpoint(test);
    expect(result).toEqual('/search?q=test');
  });

  test('buildQueryProductAPIEndpoint with category value', () => {
    const test = {
      standingPage: '',
      searchKeyWord: '',
      productId: '',
      category: 'phones',
    };
    const result = buildQueryProductEndpoint(test);
    expect(result).toEqual('/category/phones');
  });

  test('buildQueryProductAPIEndpoint with productId value', () => {
    const test = {
      standingPage: '',
      searchKeyWord: '',
      productId: '1',
      category: '',
    };
    const result = buildQueryProductEndpoint(test);
    expect(result).toEqual('/1');
  });

  test('convertToSkip function', () => {
    const result = convertToSkip('2');
    expect(result).toEqual(9);
  });
});
