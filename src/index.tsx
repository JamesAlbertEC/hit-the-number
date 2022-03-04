import React from 'react';
import ReactDOM from 'react-dom';

import { Home } from './pages/home';
import './mock/server';
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './hooks/useTransactions';

ReactDOM.render(
  <React.StrictMode>
    <TransactionsProvider>
      <Home />
      <GlobalStyle />
    </TransactionsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);