import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {

    return(
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
                <Avatar src="https://avatars.githubusercontent.com/u/89534178?v=4" />
                <div className={styles.authorInfo}>
                    <strong>Ageu Menezes</strong>
                    <span>Web Developer</span>
                </div>
            </div>

            <time>Publicado há 1h</time>
          </header>
 
          <div className={styles.content}>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p>👉 <a href="https://ageumenezesdev19.github.io" target="_blank" rel="noopener noreferrer">ageumenezesdev19.github.io</a></p>

          <p>
            <a href=""> #novoprojeto</a>
            <a href=""> #nlw</a>
            <a href=""> #rocketseat</a>
          </p>
          </div>

          <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea 
              placeholder='Escreva um comentário...'
            />
            <footer>
              <button type="submit">Publicar</button>
            </footer>
          </form>

          <div className={styles.commentList}>
            <Comment
              avatar="Alex Martins"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
            />
            <Comment
              avatar="Jenny Wilson"
              src="https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
            />
            <Comment
              avatar="Bessie Cooper"
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40"
            />
          </div>
        </article>
    )
}
