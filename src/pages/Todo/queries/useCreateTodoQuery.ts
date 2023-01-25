import { useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';

import axiosClient from 'libs/axios/axios';

interface ICreateTodo {
  title: string;
  content: string;
}

const createTodo = async (body: ICreateTodo) => {
  const { title, content } = body;

  const { data } = await axiosClient.post('todos', {
    title,
    content,
  });
  return data;
};

const useCreateTodoQuery = () => {
  const queryClient = useQueryClient();

  return useMutation(createTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos', 'list']),
    onError: (error: AxiosError) => {
      console.error(`createTodoError : ${error}`);
    },
  });
};

export default useCreateTodoQuery;
