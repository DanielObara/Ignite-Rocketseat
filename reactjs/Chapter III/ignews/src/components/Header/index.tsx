import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<img src="/images/logo.svg" alt="ignews" />
				<nav>
					<a className={styles.active}>Home</a>
					<a href="">Posts</a>
				</nav>
				
				<SignInButton/>
			</div>
		</header>
	);
}

export default Header