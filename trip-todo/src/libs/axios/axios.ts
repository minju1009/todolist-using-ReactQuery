import axios, { AxiosRequestConfig, AxiosError, AxiosHeaders } from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 8000,
  headers: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    'Content-type': 'application/json',
  },
});

axiosClient.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (config.headers === undefined) {
      config.headers = {};
    }

    const token = localStorage.getItem('token');
    if (token) {
      (config.headers as AxiosHeaders).set('Authorization', token);
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

export default axiosClient;
