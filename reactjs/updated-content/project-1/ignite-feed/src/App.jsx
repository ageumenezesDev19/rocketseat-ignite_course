import { Post } from "./Post";
import { Header } from "./components/Header";
import './style.css';

export function App() {

  return (
    <div className="App">
      <Header />
      <Post
        author="John"
        content="A cool content"
      />
      <Post
        author="John"
        content="Another cool content"
      />
    </div>
  )
}
