import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import axiosClient from 'libs/axios/axios';
import { ITodoList } from 'types/todo';

const fetchTodos = async () => {
  const { data } = await axiosClient.get('todos');
  return data.data;
};

const useGetTodosQuery = () =>
  useQuery<ITodoList[], AxiosError>(['todos', 'list'], fetchTodos, {
    onSuccess: (data) => data,
    onError: (error) => {
      console.error(`getTodosError : ${error}`);
    },
  });

export default useGetTodosQuery;
