import { ImDownload } from 'react-icons/im';
import cv from '../../assets/cv.pdf';
import styles from './styles.module.scss';

export function Home() {
  return (
    <section>
      <div className={styles.homeContainer}>
        <div className={styles.homeHeroContent}>
          <small>Olá! Seja bem vindo&#40;a&#41; à minha página.
            <br />
            <br />
            Eu sou
          </small>
          <h1>Pedro Ribas</h1>
          <span>Desenvolvedor Frontend</span>
          <a href={cv} className={styles.btnPrimary} download='pedro-ribas-cv'>
            <ImDownload /> Currículo
          </a>
          <a className={styles.btnSecondaryOutline} href="mailto:pedroibribas@gmail.com">
            Contato
          </a>
        </div>

        <div className={styles.homeAboutContent}>
          <h2>Sobre mim</h2>
          <p>
            Formado em Direito &#40;2015&#41;, mas desde criança gostando de tecnologia, comecei a estudar programação no ano de 2021 para transitar de carreira e seguir um sonho.
            <br />
            <br />
            Minha formação em programação passa principalmente pelos cursos <i>The Complete 2022 Web Development Bootcamp</i> &#40;Udemy&#41;, <i>Modern JavaScript From The Beggining</i> &#40;Udemy&#41;, e pela <i>Trilha Ignite da plataforma da Rocketseat</i>, além de outros cursos também pela Udemy.
            <br />
            <br />
            Sou especializado no desenvolvimento web frontend, para a criação das interfaces visuais de sites e aplicativos. Até o momento, meu portfolio se baseia em projetos fictícios para fins pedagógicos.
            <br />
            <br />
            Minha principal ferramenta de trabalho é o <strong>ReactJS</strong>. O ReactJS é amplamente popular no mercado, e permite criar interfaces modernas e extremamente reativas às ações do usuário. Para projetos fullstack, eu utilizo <strong>NodeJS/Express</strong> e <strong>MongoDB</strong>.
            <br />
            <br />
            Não tenho problemas em aprender novas tecnologias. Estou acostumado a aprender novidades e desejo aprofundar ainda mais na programação.
          </p>
        </div>
      </div>
    </section>
  );
};