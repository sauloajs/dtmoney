import Modal from "react-modal";
import { Container, TransactionTypeContainer } from "./styles";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Close Modal" />
        </button>

        <h2>Create Transaction</h2>

        <input
          type="text"
          placeholder="Title"
        />

        <input
          type="number"
          placeholder="Amount"
        />

        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </button>
          <button
            type="button"
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Category" />

        <button type="submit">
          Send
        </button>

      </Container>
    </Modal>
  );
}