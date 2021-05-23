import { createContext, useEffect, useState, ReactNode } from 'react'
import { api } from './services/api';

export const TransactionsContext = createContext<Transaction[]>([]);

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

export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api("transactions").then((response) => {
			setTransactions(response.data.transactions)
			console.log("🚀 ~ file: index.tsx ~ line 47 ~ useEffect ~ response.data.transactions", response.data.transactions)
		});
	}, []);
	
	return(
		<TransactionsContext.Provider value={transactions}>
			{children}
		</TransactionsContext.Provider>
	)
}