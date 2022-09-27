import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";

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

      <Modal
        isOpen={isNewTransacionModalOpen}
        onRequestClose={handleCloseNewTransacionModal}
      >
        <h2>Create Transaction</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}