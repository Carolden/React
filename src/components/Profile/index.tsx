/* eslint-disable @next/next/no-img-element */
import styles from './index.module.css'

export function Profile() {
  return (
  <div className={styles.profile}>
    <img className={styles.avatar} src='https://github.com/Carolden.png' alt="Foto de Carlos Eduardo Oldenburg"/>
    <h1 className={styles.name}>Carlos Eduardo Oldenburg</h1>
  </div>
  )
}