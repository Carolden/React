/* eslint-disable @next/next/no-img-element */
import styles from "./index.module.css";

interface ProjectTitleProps {
  title: string;
}

export function ProjectTitle(props: ProjectTitleProps) {
  return (
      <h1 className={styles.title}>{props.title}</h1>
  );
}
