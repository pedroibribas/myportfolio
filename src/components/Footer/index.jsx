import styles from './styles.module.scss';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.footerContent}>
      <small>Built by Pedro Ribas with ReactJS &#64;{year}</small>
    </div>
  );
};