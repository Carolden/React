import styles from "./index.module.css";

interface ProjectProps {
    img: string;
    alt: string;
  }

export function Project(props: ProjectProps) {
    return (
        <div className={styles.box}>
                <img src={props.img} alt={props.alt} />
        </div>
    )
}
