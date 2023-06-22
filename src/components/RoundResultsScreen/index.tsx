import styles from './styles.module.scss';

type Option = 'artists' | 'fake';

const winnerTeam: Option = 'artists';

export function RoundResultsScreen() {
  const artistsWinText = 'Os Artistas venceram a rodada.';
  const fakeWinText = 'O Mestre e o Fake venceram a rodada.';
  const resultsText = winnerTeam === 'artists' ? artistsWinText : fakeWinText;

  return (
    <main className={styles.container}>
      <h1 className={styles.winnerTitle}>{resultsText}</h1>
      <p>Preparando próxima rodada... </p>
    </main>
  );
}
