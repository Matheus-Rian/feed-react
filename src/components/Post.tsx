import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import Styles from './Post.module.css';

type Author = {
  avatarUrl: string;
  name: string;
  role: string;
};

type Content = {
  type: string;
  content: string;
}

type Props = {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: Props) {
  const [comments, setComments] = useState([
    'Post massa',
  ]);

  const [newTextComment, setNewTextComment] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setComments([...comments, newTextComment]);
    setNewTextComment('');
  }

  function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement> ) {
    setNewTextComment(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  }

  return (
    <article className={Styles.container}>
      <header>
        <div className={Styles.author}>
          <Avatar src={author.avatarUrl} />
          <div>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={Styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="/#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={Styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
          onChange={handleNewCommentChange}
          value={newTextComment}
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={Styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment 
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment} 
            />
          )
        })}
      </div>
    </article>
  )
}