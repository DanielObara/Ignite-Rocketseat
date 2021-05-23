import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';


interface Transaction {
	id: number;
	title: string;
	amount: number;
	category: string;
	createdAt: string;
	type: string;
}

interface TransactionsProviderProps {
	children: ReactNode
}

interface TransactionsContextData {
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => void;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api("transactions").then((response) => {
			setTransactions(response.data.transactions)
			console.log("🚀 ~ file: index.tsx ~ line 47 ~ useEffect ~ response.data.transactions", response.data.transactions)
		});
	}, []);

	function createTransaction(transaction: TransactionInput) {
		api.post('/transactions', transaction)
	}

	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }} >
			{children}
		</TransactionsContext.Provider>
	)
}