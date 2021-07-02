import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client'
import Head from 'next/head'
import styles from './styles.module.scss'
import { getPrismicClient } from '../../services/prismic';

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

export const getStaticProps: GetStaticProps = async () => {
	const prismic = getPrismicClient()

	const response = await prismic.query([
		Prismic.predicates.at('document.type', 'publication')
	], {
		fetch: ['publication.title', 'publication.content'],
		pageSize: 100
	})

	console.log(JSON.stringify(response, null, 2));

	return {
		props: {}
	}
}