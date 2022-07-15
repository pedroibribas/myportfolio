import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import styles from './styles.module.scss';

export function Footer() {
  return (
    <ul className={styles.footerContent}>
      <li>
        <a
          href="https://www.linkedin.com/in/pedroibribas/"
          target="_blank"
          rel='noreferrer'
        >
          <AiOutlineLinkedin />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/pedroibribas"
          target="_blank"
          rel='noreferrer'
        >
          <AiOutlineGithub />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/pedroivo.ribas/"
          target="_blank"
          rel='noreferrer'
        >
          <AiOutlineInstagram />
        </a>
      </li>
    </ul>
  );
};