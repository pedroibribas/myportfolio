import { FiExternalLink, FiGithub } from 'react-icons/fi';
import blogin from "../../assets/ss-blogin.jpg";
import taskList from "../../assets/ss-tasklist.jpg";
import appleClone from "../../assets/ss-apple.jpg";
import styles from './styles.module.scss';

export function Projects() {
  return (
    <section className={styles.projectsContainer}>
      <div className={styles.projectsContent}>
        <div className={styles.projectsHeading}>
          <h1>Portfolio</h1>
        </div>

        <div className={styles.projectsCollection}>
          <article className={styles.projectItem}>
            <div className={styles.imageBox}>
              <img src={blogin} alt='Screenshot do projeto Blogin' />
            </div>
            <div className={styles.textBox}>
              <div className={styles.title}>
                <span className={styles.small}>Projeto</span>
                <h3>
                  BlogIn
                </h3>
              </div>
              <p>
                <span className={styles.small}>Descrição</span>
                Projeto fullstack que consiste em uma plataforma de blog para a leitura e
                criação de publicações. O usuário é capaz de criar uma conta de
                acesso pessoal para compartilhar publicações com os demais
                usuários.
              </p>
              <div className={styles.links}>
                <span className={styles.small}>Links</span>
                <a
                  href="https://github.com/pedroibribas/blogproject"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://ribasblogproject.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </article>

          <article className={styles.projectItem}>
            <div className={styles.imageBox}>
              <img src={taskList} alt='Screenshot do projeto de Lista de Tarefas' />
            </div>
            <div className={styles.textBox}>
              <div className={styles.title}>
                <span className={styles.small}>Projeto</span>
                <h3>Lista de Tarefas</h3>
              </div>
              <p>
                <span className={styles.small}>Descrição</span>
                Projeto frontend que consiste em um aplicativo para criar uma
                lista de tarefas. O
                usuário é capaz de criar, marcar como concluídas e remover
                tarefas.
              </p>
              <div className={styles.links}>
                <span className={styles.small}>Links</span>
                <a
                  href="https://github.com/pedroibribas/todoslist"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://prdev-todolist.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </article>
          <article className={styles.projectItem}>
            <div className={styles.imageBox}>
              <img src={appleClone} alt='Screenshot do clone da Apple Brasil' />
            </div>
            <div className={styles.textBox}>
              <div className={styles.title}>
                <span className={styles.small}>Projeto</span>
                <h3>Landing page da Apple Brasil</h3>
              </div>
              <p>
                <span className={styles.small}>Descrição</span>
                A finalidade desse projeto foi de recriar a página inicial da
                Apple Brasil, de forma a praticar o posicionamento dos elementos e
                a responsividade da página para os principais dispositivos, tais
                como mobile, tablet e desktop.
              </p>
              <div className={styles.links}>
                <span className={styles.small}>Links</span>
                <a
                  href="https://github.com/pedroibribas/Apple-Homepage"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://ornate-kitten-67442d.netlify.app/#"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </article>
        </div>

        <a
          className={styles.btnPrimary}
          href="https://github.com/pedroibribas"
          target="_blank"
          rel="noreferrer"
        >Mais projetos</a>
      </div>
    </section>
  );
};