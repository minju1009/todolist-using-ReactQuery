import { useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';

import axiosClient from 'libs/axios/axios';
import { IUpdateTodo } from 'types/todo';

const updateTodo = async (body: IUpdateTodo) => {
  const { title, content, id } = body;

  const { data } = await axiosClient.put(`todos/${id}`, {
    title,
    content,
  });
  return data;
};

const useUpdateTodoQuery = () => {
  const queryClient = useQueryClient();

  return useMutation(updateTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
    onError: (error: AxiosError) => {
      console.error(`updateTodoError : ${error}`);
    },
  });
};

export default useUpdateTodoQuery;
