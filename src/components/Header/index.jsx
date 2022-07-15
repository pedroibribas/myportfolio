import { useEffect, useState } from 'react';
import { BsCodeSquare } from "react-icons/bs";
import { ImDownload } from 'react-icons/im';
import { Link, useLocation } from 'react-router-dom';
import cv from '../../assets/cv.pdf';
import styles from './styles.module.scss';

export function Header() {
  const [active, setActive] = useState({
    isHomeActive: false,
    isProjectsActive: false,
  });

  const { isHomeActive, isProjectsActive } = active;

  const path = useLocation().pathname;

  useEffect(() => {
    if (path === '/') {
      setActive(prevState => (
        {
          ...prevState,
          isHomeActive: true,
          isProjectsActive: false,
        }
      ));
    }

    if (path === '/projects') {
      setActive(prevState => (
        {
          ...prevState,
          isHomeActive: false,
          isProjectsActive: true,
        }
      ));
    };
  }, [path]);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <BsCodeSquare className={styles.headerLogo} />
        <nav>
          <Link className={isHomeActive ? styles.active : ''} to='/'>Home</Link>
          <Link className={isProjectsActive ? styles.active : ''} to='/projects'>Projetos</Link>
        </nav>
        <a href={cv} className={styles.btnPrimary} download='pedro-ribas-cv'>
          <ImDownload /> Currículo
        </a>
      </div>
    </header>
  );
};