import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Auth from 'pages/Auth';
import Todo from 'pages/Todo';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Auth />} path="auth" />
          <Route element={<Todo />} path="todo" />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
