import styles from './styles.module.scss';

export function ScoreTable() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.tableHeader}>
          <span>Nome</span>
          <span>Pontuação</span>
        </p>
        <p className={styles.playerScore}>
          <span>Luca Rodrigues</span>
          <span>45</span>
        </p>
        <p className={styles.playerScore}>
          <span>Vitor Guez</span>
          <span>20</span>
        </p>
        <p className={styles.playerScore}>
          <span>Thomas Cleff</span>
          <span>15</span>
        </p>
      </div>
    </footer>
  );
}
