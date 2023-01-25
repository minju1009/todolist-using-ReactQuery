import { useQuery } from 'react-query';
import { AxiosError } from 'axios';

import axiosClient from 'libs/axios/axios';
import { ITodoList } from 'types/todo';

const fetchTodoById = async (id: string) => {
  const { data } = await axiosClient.get(`todos/${id}`);
  return data.data;
};

const useGetTodoByIdQuery = (id: string) =>
  useQuery<ITodoList, AxiosError>(
    ['todos', 'byId', id],
    () => fetchTodoById(id),
    {
      enabled: !!id,
      onSuccess: (data) => data,
      onError: (error) => {
        console.error(`getTodoDyIdError : ${error}`);
      },
    },
  );

export default useGetTodoByIdQuery;
