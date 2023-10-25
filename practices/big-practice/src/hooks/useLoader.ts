// Libs
import useSWR from 'swr';

// Constants
import { BASE_URL } from '@constants';

// Services
import { request } from '@services/request';

export const useLoader = () => {
  const results = useSWR(BASE_URL, request);

  return results;
};
