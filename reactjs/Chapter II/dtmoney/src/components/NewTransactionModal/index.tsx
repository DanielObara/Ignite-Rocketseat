import ReactModal from "react-modal";
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
			<Container>
				<h2>Cadastrar Transação</h2>
				<input type="text" placeholder="Titulo"/>
				<input type="number" placeholder="Valor" />
				<input type="text" placeholder="categoria" />
			</Container>
		</ReactModal>
	)
}