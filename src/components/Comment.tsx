import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import Styles from './Comment.module.css';

export function Commment() {
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

            <button title='Deletar comentário'>
              <Trash size={20} />
            </button>
          </header>

          <p>Parabéns pelo conteúdo 👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}