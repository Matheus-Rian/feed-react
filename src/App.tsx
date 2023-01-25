import { Header } from "./components/Header";
import { Sidebar } from './components/Sidebar';
import { Post } from "./components/Post";

import Styles from './App.module.css';
import './global.css';

function App() {
  return (
    <>
      <Header />
      <div className={Styles.container}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

export default App
