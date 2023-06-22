import { Button } from '@/components/Button';
import { Link } from '@/components/Link';

import styles from './styles.module.scss';

const playAgain = false;

export function EndGameScreen() {
  return (
    <main className={styles.container}>
      <h1 className={styles.endGameTitle}>Fim de jogo.</h1>
      <h2 className={styles.winnerTitle}>Vencedor: Luca Rodrigues</h2>
      <div className={styles.buttonRow}>
        <Link to="/">Sair da partida</Link>
        <Button className={playAgain ? styles.active : ''}>
          Jogar novamente
        </Button>
      </div>
      <p>Votos para nova partida: 3/10</p>
    </main>
  );
}
