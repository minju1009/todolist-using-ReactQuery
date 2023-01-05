import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';

import axiosClient from 'libs/axios/axios';

const fetchSignup = async (email: string, password: string) => {
  const { data } = await axiosClient.post('/users/create', {
    email,
    password,
  });

  return data;
};

const useSignupQuery = (setErrorText: Function) =>
  useMutation(
    ({ email, password }: { email: string; password: string }) =>
      fetchSignup(email, password),
    {
      onSuccess: (data) => {
        alert(data.message);
      },
      onError: (error: AxiosError) => {
        if (axios.isAxiosError(error)) {
          setErrorText(error.response?.data?.details);
        }
      },
    },
  );

export default useSignupQuery;
