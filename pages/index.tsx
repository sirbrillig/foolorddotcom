import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

interface InterestLink {
	name: string;
	url: string;
}

const codingProjects: InterestLink[] = [
	{
		name: "phpcs-variable-analysis",
		url: "https://github.com/sirbrillig/phpcs-variable-analysis/",
	},
	{
		name: "phpcs-changed",
		url: "https://github.com/sirbrillig/phpcs-changed/",
	},
];

const codeBlogLinks: InterestLink[] = [
	{
		name: "Good coding practices",
		url: "https://github.com/sirbrillig/phpcs-variable-analysis/",
	},
	{
		name: "Writing a PR description to get better reviews.",
		url: "https://github.com/sirbrillig/phpcs-changed/",
	},
];

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Payton Swick</title>
				<meta
					name="description"
					content="Payton Swick: Web developer, vegan, tea explorer. Writes code at Automattic."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1>Payton Swick</h1>

				<div className={styles.interests}>
					<Interest className={styles['interest__code']} title="I love coding." links={codingProjects} />
					<Interest className={styles['interest__code-blog']} title="I love writing about code." links={codeBlogLinks} />
				</div>
			</main>
		</div>
	);
};

function Interest({ title, links, className }: { title: string; links: InterestLink[], className?: string }) {
	return (
		<section className={`${styles.card} ${className}`}>
			<h2>{title}</h2>

			<ul>
				{links.map((link) => (
					<li key={link.name}>
						<a href={link.url}>{link.name}</a>
					</li>
				))}
			</ul>
		</section>
	);
}

export default Home;
