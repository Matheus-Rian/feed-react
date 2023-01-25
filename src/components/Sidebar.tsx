import { PencilLine  } from 'phosphor-react';
import Styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={Styles.container}>
      <img 
        className={Styles.cover}
        src="https://images.unsplash.com/photo-1573496358349-d97974b2339b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" 
      />

      <div className={Styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/53922139?v=4" />
        <strong>Matheus Rian</strong>
        <span>Front-End Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}