import { request } from '@services/request';
import { preload } from 'swr';
import { URL } from '@constants';

const fetchAndCacheData = async (key: string) => {
  const result = await preload(key, request);

  return result;
};

export const dataLoader = async () => {
  const data = await fetchAndCacheData(URL);

  return data;
};
