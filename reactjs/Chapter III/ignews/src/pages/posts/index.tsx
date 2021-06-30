import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
	return (
		<>
			<Head>
				<title>Posts | Ignews</title>
			</Head>
			
			<main>
				<div className={styles.container}>
					<a>
						<time>12 de março de 2021</time>
						<strong>Creating a Monorepo with Lerna & Yarn Workspaces </strong>
						<p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
					</a>
					<a>
						<time>12 de março de 2021</time>
						<strong>Creating a Monorepo with Lerna & Yarn Workspaces </strong>
						<p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
					</a>
					<a>
						<time>12 de março de 2021</time>
						<strong>Creating a Monorepo with Lerna & Yarn Workspaces </strong>
						<p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
					</a>
				</div>
			</main>
		</>
	);
}