import { useEffect, useState } from 'react';
import { ImDownload } from 'react-icons/im';
import { Link, useLocation } from 'react-router-dom';
import { Socials } from '../Socials';
import cv from '../../assets/cv.pdf';
import logo from '../../assets/logo.png';
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
        <div className={styles.logoBox}>
          <Link to='/'>
            <img src={logo} alt='Logo do portfolio' />
          </Link>
        </div>
        <div className={styles.socialsBox}><Socials /></div>
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