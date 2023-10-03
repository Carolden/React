import styles from "./index.module.css";

interface ProjectProps {
    img: string;
    route: string
    alt: string;
  }

export function Project(props: ProjectProps) {
    return (
        <div className={styles.box}>
            <a href={props.route}>
                <img src={props.img} alt={props.alt} />
            </a>
        </div>
    )
}
