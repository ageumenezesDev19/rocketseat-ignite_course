import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
      'Post muito bacana, hein?!'
    ]);

    const dateFormat = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
      locale: ptBR,
    });

    const publishedDate = formatDistanceToNow(publishedAt, {
      locale: ptBR,
      addSuffix: true,
    });
  
    function handleCreateNewComment() {
      event.preventDefault();

      const newCommentText = event.target.comment.value
      setComments([...comments, newCommentText]);
    }

    return(
        <article className={styles.post}> 
          <header>
            <div className={styles.author}>
                <Avatar src={author.avatarUrl} />
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>

            <time title={dateFormat} dateTime={publishedAt.toISOString()}>{publishedDate}</time>
          </header>
 
          <div className={styles.content}>
            {content.map((line) => {
              if (line.type === 'paragraph') {
                return <p>{line.content}</p>
              } else if (line.type === 'link') {
                return <p><a href="#">{line.content}</a></p> 
              }
            })}
          </div>

          <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea
              name="comment"
              placeholder='Escreva um comentário...' 
            />
            <footer>
              <button type="submit">Publicar</button>
            </footer>
          </form>

          <div className={styles.commentList}>
            {comments.map((comment) => {
               return <Comment content={comment}/>
            })}
          </div>
        </article>
    )
}
