// Helpers
import { buildQueryProductEndpoint } from '@helpers/products';
import { convertToSkip, isEmpty } from '@helpers/utils';

describe('Test buildQueryProductAPIEndpoint functions', () => {
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
});

describe('Test convertToSkip function', () => {
  test('convert string to number and time by 9', () => {
    const result = convertToSkip('2');
    expect(result).toEqual(9);
  });
});

describe('Test isEmpty function', () => {
  test('check the param with empty value ', () => {
    const result = isEmpty('');
    expect(result).toBeTruthy();
  });

  test('check the param with empty value ', () => {
    const result = isEmpty('test value');
    expect(result).toBeFalsy();
  });
});

// TODO: UT for debounce function
