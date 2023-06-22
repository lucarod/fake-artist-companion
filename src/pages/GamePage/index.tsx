import { GameMasterScreen } from '@/components/GameMasterScreen';
import { ArtistScreen } from '@/components/ArtistScreen';
import { ScoreTable } from '@/components/ScoreTable';
import { RoundResultsScreen } from '@/components/RoundResultsScreen';
import { EndGameScreen } from '@/components/EndGameScreen';

import { GameState, Role, RoleEnum } from './types';
import { getGameRoleTitle } from './utils';
import styles from './styles.module.scss';

const playerRole: Role = RoleEnum.GameMaster;
const roleTitle = getGameRoleTitle(playerRole);
const isWordSelected = true;
const gameState: GameState = 'roundOn';

export function GamePage() {
  return (
    <>
      {gameState === 'roundOn' && (
        <>
          <header>
            <h1 className={styles.title}>{roleTitle}</h1>
          </header>
          <main className={styles.content}>
            <>
              {playerRole === RoleEnum.GameMaster ? (
                <GameMasterScreen isWordSelected={isWordSelected} />
              ) : (
                <ArtistScreen isWordSelected={isWordSelected} />
              )}
            </>
          </main>
        </>
      )}
      {gameState === 'endOfRound' && <RoundResultsScreen />}
      {gameState === 'endOfGame' && <EndGameScreen />}
      <ScoreTable />
    </>
  );
}
