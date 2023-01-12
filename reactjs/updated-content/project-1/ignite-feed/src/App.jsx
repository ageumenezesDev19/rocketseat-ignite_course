import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div className="App">
      <Header />

      <div className={styles.wrepper}>
        <Sidebar/>
        <main>
          <Post
            author="John"
            content="A cool content"
          />
          <Post
            author="Alex"
            content="Another cool content"
          />
        </main>
      </div>
    </div>
  )
}
