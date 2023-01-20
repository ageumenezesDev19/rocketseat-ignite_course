import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return(
    <div className={styles.comment }>
      <img src="https://avatars.githubusercontent.com/u/89534178?v=4" alt="Foto de Perfil" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.AuthorAndTime}>
              <strong>Diego Fernandes</strong>
              <time>Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} /> 
            </button> 
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
