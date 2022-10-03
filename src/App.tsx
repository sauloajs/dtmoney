import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
    <>
      <Header onOpenNewTransacionModal={handleOpenNewTransacionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransacionModalOpen} onRequestClose={handleCloseNewTransacionModal} />
      <GlobalStyle />
    </>
  );
}