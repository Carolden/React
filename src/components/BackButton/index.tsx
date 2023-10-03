import styles from './index.module.css';

function handleClick() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export function BackButton() {
    return (
        <>
            <button className={styles.button} onClick={handleClick}>Voltar para o topo</button>
        </>
    )
}

