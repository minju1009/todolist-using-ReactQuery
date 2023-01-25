import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';

import axiosClient from 'libs/axios/axios';

const fetchLogin = async (email: string, password: string) => {
  const { data } = await axiosClient.post('/users/login', { email, password });

  return data;
};

const useLoginQuery = (setErrorText: Function) =>
  useMutation(
    ({ email, password }: { email: string; password: string }) =>
      fetchLogin(email, password),
    {
      onSuccess: (data) => {
        localStorage.setItem('token', data.token);
        alert('로그인에 성공했습니다');
      },
      onError: (error: AxiosError) => {
        if (axios.isAxiosError(error)) {
          setErrorText(error.response?.data.details);
        }
      },
    },
  );

export default useLoginQuery;
