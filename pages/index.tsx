import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
			<div className={styles["bottom-clouds"]}>
				<div className={styles.mountains}>
					<div className={styles["top-clouds"]}>
						<Head>
							<title>Payton Swick</title>
							<meta
								name="description"
								content="Payton Swick: Web developer, vegan, tea explorer. Writes code at Automattic."
							/>
							<link rel="icon" href="/favicon.ico" />
						</Head>

						<main className={styles.main}>
							<h1 className={styles.title}>Payton Swick</h1>
							<div className={styles.subtitle}>
								Vegan. Digital craftsman. Tea explorer. Avid learner of things.
								Writes code @Automattic.
							</div>

							<div className={styles.interests}>
								<div className={styles['interests__section']}>
									About me.
								</div>
								<div className={styles['interests__section']}>
									I love coding.
								</div>
								<div className={styles['interests__section']}>
									Coding thoughts.
								</div>
								<div className={styles['interests__section']}>
									Tea thoughts.
								</div>
								<div className={styles['interests__section']}>
									D&D Campaigns.
								</div>
								<div className={styles['interests__section']}>
									D&D One-shots.
								</div>
							</div>

							<div className={styles.grid}>
								<Interest
									className={styles["interest__code"]}
									title="I love coding."
									links={codingProjects}
								/>
								<Interest
									className={styles["interest__code-blog"]}
									title="I love writing about code."
									links={codeBlogLinks}
								/>
								<Interest
									className={styles["interest__dnd"]}
									title="I love Dungeons and Dragons."
									links={dndDBlogLinks}
								/>
							</div>
						</main>
					</div>
				</div>
			</div>
		</div>
	);
};

function Interest({
	title,
	links,
	className,
}: {
	title: string;
	links: InterestLink[];
	className?: string;
}) {
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
