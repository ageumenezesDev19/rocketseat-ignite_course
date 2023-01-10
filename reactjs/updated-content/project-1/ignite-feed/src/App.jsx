import { Post } from "./components/Post";
import { Header } from "./components/Header";
import './global.css';

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
