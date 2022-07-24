import { CgClose } from 'react-icons/cg';
import { ImDownload } from 'react-icons/im';
import { Link } from 'react-router-dom';
import cv from '../../../assets/cv.pdf';
import styles from "./styles.module.scss";

export function Menu({ isHomeActive, isProjectsActive, onCloseMenu }) {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link className={isHomeActive ? styles.active : ''} to='/'>Home</Link>
        </li>
        <li>
          <Link className={isProjectsActive ? styles.active : ''} to='/projects'>Projetos</Link>
        </li>
      </ul>

      <a href={cv} className={styles.btnPrimary} download='pedro-ribas-cv'>
        <ImDownload /> Currículo
      </a>

      <button className={styles.closeBtn} onClick={onCloseMenu}>
        <CgClose />
      </button>
    </div>
  );
};