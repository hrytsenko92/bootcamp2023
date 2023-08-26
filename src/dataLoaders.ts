import axios, { AxiosError } from 'axios';
const route = 'https://api.thecatapi.com/v1/'

// export const getData = async (
//   url: string,
// ) => {
//   try {
//      const response = await axios.get(`${route}${url}`, {
//        headers: {
//          'Content-Type': 'application/json',
//          'x-api-key': import.meta.env.APIKEY,
//        },
//      });
//     return response.data;
//   } catch (err) {
//     const errors = err as Error | AxiosError;
//     if (!axios.isAxiosError(errors)) {
//       console.log(errors);
//     }
//     console.log(`Axios error: ${err}`);
//   }
// };

export const postData = async (
  url: string,
  params: object = {},
) => {
  try {
    const response = await axios.post(`${route}${url}`, params, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': import.meta.env.VITE_APIKEY,
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

export const getData = async (url: string, limit: number) => {
  try {
        const params = {
          limit,
        };
        const response = await axios.get(`${route}${url}`, {
          params,
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': import.meta.env.APIKEY,
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

