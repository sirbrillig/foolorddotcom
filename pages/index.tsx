import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

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
			</main>
		</div>
	);
};

export default Home;
