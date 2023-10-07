import Home from '@/pages';
import styles from './index.module.css';
import { Route } from 'react-router-dom';

function handleClick() {
    <Route component = { Home }  path="./../home/index.tsx" exact />
    };


export function BackButton() {
    return (
        <>
            <button className={styles.button} onClick={handleClick}>Voltar para o início</button>
        </>
    )
}

