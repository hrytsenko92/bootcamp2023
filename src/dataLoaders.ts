import axios, { AxiosError } from 'axios';

export const getImage = async (
  url: string,
  params: object = {},
  headers: object = {},
) => {
  try {
    const response = await axios.get(url, {
      params,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.APIKEY,
        ...headers,
      },
    });
    return response.data;
  } catch (err) {
    const errors = err as Error | AxiosError;
    if (!axios.isAxiosError(errors)) {
      console.log(errors);
    }
    console.log(`Axios error: ${err}`);
  }
};
