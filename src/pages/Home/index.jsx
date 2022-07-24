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
          <a
            className={styles.btnPrimary}
            href={cv}
            download='pedro-ribas-cv'
          >
            <ImDownload /> Currículo
          </a>
          <a
            className={styles.btnSecondaryOutline} href="mailto:pedroibribas@gmail.com"
            target='_blank'
            rel="noreferrer"
          >
            Contato
          </a>
        </div>

        <div className={styles.homeAboutContent}>
          <h2>Sobre mim</h2>
          <p>
            Sou especializado no desenvolvimento de sites e aplicativos para a web.
            <br />
            <br />
            Minha principal ferramenta de trabalho para a criação de interfaces do usuário &#40;frontend&#41; é o <strong>ReactJS</strong>. O ReactJS é amplamente popular no mercado, e permite criar visuais modernos e extremamente reativos às ações do usuário.
            <br />
            <br />
            Para a criação de servidores e banco de dados &#40;backend&#41;, eu utilizo <strong>NodeJS/Express</strong> e <strong>MongoDB</strong>, que permitem uma integração prática e natural com o ReactJS.
          </p>
        </div>
      </div>
    </section>
  );
};