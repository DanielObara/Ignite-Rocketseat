import ReactModal from "react-modal";

interface newTransactionModalProps {
	isOpen: boolean;
	onRequestClose: ()=> void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps ){
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
		>
			<h2>Cadastrar Transação</h2>
		</ReactModal>
	)
}