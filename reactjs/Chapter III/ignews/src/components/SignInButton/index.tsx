import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession } from 'next-auth/client'

import styles from './styles.module.scss'

export function SignInButton() {
	const [session] = useSession();
  console.log("🚀 ~ file: index.tsx ~ line 9 ~ SignInButton ~ session", session)
	
	return session ? (
		<button className={styles.signInButton} type="button">
			<FaGithub color="#04d361" />
				Daniel Obara
			<FiX color="#737380" className={styles.closeIcon} />
		</button>
	) : (
		// TODO: add key to onclick
			<button className={styles.signInButton} onClick={() => signIn('github')} type="button">
			<FaGithub color="#eba417" />
				Sign in with GitHub

		</button>
	)
}