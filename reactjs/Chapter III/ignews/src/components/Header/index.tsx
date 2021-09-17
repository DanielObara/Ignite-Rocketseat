import { SignInButton } from '../SignInButton'
import Link from 'next/link';
import styles from './styles.module.scss'

function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<img src="/images/logo.svg" alt="ignews" />
				<nav>
					{/* A ideia de usar a tag Link do Next é que ele não reconstrua tudo do zero e sim apenas o que realmente precisa */}
					<Link href="/">
					<a className={styles.active}>Home</a>
					</Link>
					{/* atributo prefetch no link, já faz com que o conteúdo seja carregado previamente */}
					<Link href="/posts" prefetch>
					<a>Posts</a>
					</Link>
				</nav>
				
				<SignInButton/>
			</div>
		</header>
	);
}

export default Header