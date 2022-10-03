import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from "miragejs";
import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Transaction 1',
          type: 'deposit',
          amount: 1,
          category: 'Dev',
          createdAt: new Date(),
        },
        {
          id: 2,
          title: 'Transaction 2',
          type: 'deposit',
          amount: 1100,
          category: 'Dev',
          createdAt: new Date(),
        }
      ],
    })
  },

  routes() {
    this.namespace = 'api';
    
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transactions', data);
    })
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);