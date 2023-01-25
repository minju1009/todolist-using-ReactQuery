import { useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';

import axiosClient from 'libs/axios/axios';

const deleteTodo = async (id: string) => {
  await axiosClient.delete(`todos/${id}`);
};

const useDeleteTodoQuery = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries(['todos']),
    onError: (error: AxiosError) => {
      console.error(`DeleteTodoError : ${error}`);
    },
  });
};

export default useDeleteTodoQuery;
