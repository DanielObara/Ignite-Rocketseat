import { FormEvent, useState } from "react";
import ReactModal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useTransactions } from "../../hooks/useTransactions";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: newTransactionModalProps) {
  const { createTransaction } = useTransactions()

  const [type, setType] = useState("deposit");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title, amount, category, type
    })

    setTitle('')
    setType('deposit')
    setAmount(0)
    setCategory('')
    onRequestClose()
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Titulo"
        />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Valor"
        />
        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="categoria"
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
}
