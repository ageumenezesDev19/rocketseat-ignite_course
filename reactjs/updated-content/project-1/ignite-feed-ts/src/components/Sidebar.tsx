import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
        <img
            className={styles.cover}
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        /> 
        <div className={styles.profile}>
          <Avatar src="https://avatars.githubusercontent.com/u/89534178?v=4" />

          <strong>Ageu Menezes</strong> 
          <span>Web Developer</span>

          <footer>
            <a href="#">
              <PencilLine size={20} />
              Editar o seu perfil
            </a>
          </footer>
        </div>
    </aside>
  )
}
