import Styles from './Post.module.css';

export function Post() {
  return (
    <article className={Styles.container}>
      <header>
        <div className={Styles.author}>
          <img src="https://avatars.githubusercontent.com/u/53922139?v=4" />
          <div>
            <strong>Matheus Rian</strong>
            <span>Front-End Developer</span>
          </div>
        </div>

        <time title='22 de novembro às 08h' dateTime='2022-11-22 08:00:12'>Publicado há 1h</time>
      </header>

      <div className={Styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="#">jane.design/doctorcare</a></p>

        <p>
          <a href="#">#novoprojeto</a> {' '}
          <a href="#">#nlw</a> {' '}
          <a href="#">#rocketseat</a> {' '}
        </p>
      </div>

      <form className={Styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}