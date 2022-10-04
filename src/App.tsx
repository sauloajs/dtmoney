import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransacionModalOpen, setIsNewTransacionModalOpen] = useState(false);

  function handleOpenNewTransacionModal() {
    setIsNewTransacionModalOpen(true);
  }

  function handleCloseNewTransacionModal() {
    setIsNewTransacionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransacionModal={handleOpenNewTransacionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransacionModalOpen} onRequestClose={handleCloseNewTransacionModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}