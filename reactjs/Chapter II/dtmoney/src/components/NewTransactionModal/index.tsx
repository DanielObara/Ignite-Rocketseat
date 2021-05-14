import ReactModal from "react-modal";
import closeImg from '../../assets/close.svg'
import { Container } from "./styles";

interface newTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps) {
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


			<Container>
				<h2>Cadastrar Transação</h2>
				<input type="text" placeholder="Titulo" />
				<input type="number" placeholder="Valor" />
				<input type="text" placeholder="categoria" />
				<button type="submit">Cadastrar</button>
			</Container>
		</ReactModal>
	)
}