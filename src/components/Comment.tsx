import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment} :  CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  // function handleLikeComment() {
  //   setLikeCount(likeCount + 1)
  // }

  // Closure - retorna o valor do statu atual
  function handleLikeComment(){
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/79115354?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.commentHeader}>
            <div className={styles.authorAndTime}>
              <strong>Lázaro Pimentel</strong>
              <time dateTime="20220-03-06 20:36:00">Publicado a 1 hora</time>
            </div>

            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          {/* <button onClick={handleLikeComment}> */}
          <button onClick={() => setLikeCount(likeCount + 1)}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
