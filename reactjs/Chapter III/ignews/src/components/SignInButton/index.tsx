import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn } from 'next-auth/client'

import styles from './styles.module.scss'

export function SignInButton() {
	const isUserLoggedIn = true;
	return isUserLoggedIn ? (
		<button className={styles.signInButton} type="button">
			<FaGithub color="#04d361" />
				Daniel Obara
			<FiX color="#737380" className={styles.closeIcon} />
		</button>
	) : (
		// TODO: add key to onclick
			<button className={styles.signInButton} onClick={() => signIn('')} type="button">
			<FaGithub color="#eba417" />
				Sign in with GitHub

		</button>
	)
}