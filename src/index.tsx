import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/home';
import './mock/server';

import { TransactionsProvider } from './hooks/useTransactions';

ReactDOM.render(
  <React.StrictMode>
    <TransactionsProvider>
      <Home />
    </TransactionsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);