import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import Styles from './Comment.module.css';

type Props = {
  content: string;
  onDeleteComment: (comment: string) => void;
};

export function Comment({ content, onDeleteComment }: Props) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeCount() {
    setLikeCount(prevState => prevState + 1);
  }

  return (
    <div className={Styles.container}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/53922139?v=4" />

      <div className={Styles.commentWrapper}>
        <div className={Styles.commentBox}>
          <header>
            <div className={Styles.authorAndTime}>
              <strong>Matheus Rian</strong>
              <time title='22 de novembro às 08h' dateTime='2022-11-22 08:00:12'>Cerca de 1 hora atrás</time>
            </div>

            <button title='Deletar comentário' onClick={handleDeleteComment}>
              <Trash size={20} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}