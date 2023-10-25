// Libs
import axios, { AxiosError } from 'axios';

// Constants
import { BASE_URL } from '@constants';

export const fetcher = async (endpoint: string) => {
  try {
    const res = await axios.get(BASE_URL + endpoint);

    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const serverError = err as AxiosError;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }

      return { errorMessage: 'An error occurred' };
    }
  }
};
