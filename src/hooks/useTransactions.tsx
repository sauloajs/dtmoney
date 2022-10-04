import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionDTO = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionDTO) => Promise<void>;
}

const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function createTransaction(transactionDto: TransactionDTO) {
    const response = await api.post('/transactions', transactionDto)

    const { transaction } = response.data;
    
    setTransactions([
      ...transactions,
      transaction
    ]);

  }

  useEffect(() => {
    api.get('/transactions')
      .then((response) => {
        setTransactions(response.data.transactions);
      })
  }, []);

  return (<TransactionsContext.Provider value={{
    transactions,
    createTransaction
  }}>{children}</TransactionsContext.Provider>);
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}