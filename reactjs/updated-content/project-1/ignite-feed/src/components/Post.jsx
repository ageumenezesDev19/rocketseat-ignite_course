import styles from './Post.module.css'

export function Post(props) {

    return(
        <article className={styles.post}>
          <header>
            <div className={styles.author}>
                <img
                  className={styles.avatar}
                  src="https://avatars.githubusercontent.com/u/89534178?v=4" alt="imagem de perfil"
                />
                <div className={styles.authorInfo}>
                    <strong>Ageu Menezes</strong>
                    <span>Software Engineer</span>
                </div>
            </div>

            <time dataTime='2023-01-19 09:40:00'>Publicado há 1h</time>
          </header>

          <div style={styles.content}>
          <p>Fala galeraa 👋</p>

          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

          <p>👉 <a href="" target="_blank" rel="noopener noreferrer">jane.design/doctorcare</a></p>

          <p>#novoprojeto #nlw #rocketseat</p>
          </div>
        </article>
    )
}
