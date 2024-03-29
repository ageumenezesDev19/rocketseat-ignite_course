import { SingInButton } from "../SingInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <a href="" className={styles.active}>Home</a>
          <a href="">Post</a>
        </nav>

        <SingInButton />
      </div>
    </header>
  );
}
