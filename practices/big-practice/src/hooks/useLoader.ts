// Libs
import useSWR from 'swr';

// Constants
import { URL } from '@constants';

// Services
import { request } from '@services/request';

export const useLoader = () => {
  const results = useSWR(URL, request);

  return results;
};
