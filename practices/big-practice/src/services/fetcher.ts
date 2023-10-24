import axios, { AxiosError } from 'axios';

export const fetcher = async (url: string) => {
  try {
    const res = await axios.get(url);

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
