import { OutlineBox } from '@/components/OutlineBox';
import { GameMasterScreen } from '@/components/GameMasterScreen';
import { ArtistScreen } from '@/components/ArtistScreen';

import { Role, RoleEnum } from './types';
import { getGameRoleTitle } from './utils';
import styles from './styles.module.scss';
import { ScoreTable } from '@/components/ScoreTable';

const playerRole: Role = RoleEnum.Artist;
const roleTitle = getGameRoleTitle(playerRole);
const isWordSelected = true;

export function GamePage() {
  return (
    <>
      <header>
        <h1 className={styles.title}>{roleTitle}</h1>
      </header>
      <main className={styles.content}>
        <OutlineBox>
          {playerRole === RoleEnum.GameMaster ? (
            <GameMasterScreen isWordSelected={isWordSelected} />
          ) : (
            <ArtistScreen isWordSelected={isWordSelected} />
          )}
        </OutlineBox>
      </main>
      <ScoreTable />
    </>
  );
}
