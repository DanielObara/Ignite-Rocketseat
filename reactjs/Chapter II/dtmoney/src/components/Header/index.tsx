import { useState } from 'react'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
	const [isClose, setIsClose] = useState(false)
	return (
		<Container>
			<Content>
				<img src={logoImg} alt="dt money" />
				<button type="button">
					Nova Transação
				</button>
			</Content>
		</Container>
	)
}