import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from 'pages/Login';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Login />} path="auth" />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
