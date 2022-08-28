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
		url: "https://payton.codes/2022/08/19/good-coding-practices/",
	},
	{
		name: "Writing a PR description to get better reviews.",
		url: "https://payton.codes/2022/06/27/writing-a-diff-pr-description-to-get-better-reviews/",
	},
];

const dndDBlogLinks: InterestLink[] = [
	{
		name: "An Unfinished War.",
		url: "https://thesahrencampaign.wordpress.com/",
	},
	{
		name: "Amari's Armada.",
		url: "https://amarisarmada.wordpress.com/",
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

				<div className={styles.grid}>
					<Interest className={styles['interest__code']} title="I love coding." links={codingProjects} />
					<Interest className={styles['interest__code-blog']} title="I love writing about code." links={codeBlogLinks} />
					<Interest className={styles['interest__dnd']} title="I love Dungeons and Dragons." links={dndDBlogLinks} />
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
