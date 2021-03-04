import styles from '../styles/HeaderR11.module.css';
import * as functions from '../scripts/HomeR11'


export default function Home() {
  return (
    <section className={styles.main}>
      <p>Header</p>
      <button onClick={() => functions.myFunction()}>Click me</button>
    </section>
  )
}
