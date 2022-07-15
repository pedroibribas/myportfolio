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
        </div>

        <div className={styles.homeAboutContent}>
          <h2>Sobre mim</h2>
          <p>
            Desde criança gostando de tecnologia, comecei com programação no ano de 2021.
            <br />
            <br />
            Sou especializado no desenvolvimento web frontend, para a criação das interfaces visuais de sites e aplicativos.
            <br />
            <br />
            Minha principal ferramenta é o <strong>ReactJS</strong>. O ReactJS é amplamente popular no mercado, e permite criar interfaces modernas e extremamente reativas às ações do usuário.
            <br />
            <br />
            Para projetos fullstack, eu utilizo <strong>NodeJS/Express</strong> e <strong>MongoDB</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};