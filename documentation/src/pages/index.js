import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <Layout title="Konn" description="Introduce logic to your YAML with Konn">
      <header className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.title}>Konn</h1>
          <p className={styles.subtitle}>Introduce logic to your YAML with Konn</p>
          <div className={styles.buttons}>
            <Link className={styles.button} to="/intro/intro">
              Get Started
            </Link>
            <Link className={styles.buttonOutline} to="/tutorial/config">
              Learn the Basics
            </Link>
            <Link className={styles.button} to="/api/config/api-config-new">
              Api Reference
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
