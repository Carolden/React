import React from "react";
import styles from "./index.module.css";

interface ExperienceProps {
    job: string;
    year: string;
  }

export function Experience(props: ExperienceProps) {
    return (
        <div className={styles.box}>
            <div className={styles.boxHeader}>
                <span className={styles.job}>{props.job}</span>
                <span className={styles.year}>{props.year}</span>
            </div>
            <div>
                <span className={styles.description}>Descrição</span>
            </div>
        </div>
    )
}
