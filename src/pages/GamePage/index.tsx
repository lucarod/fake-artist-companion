import { OutlineBox } from '@/components/OutlineBox';
import { Role, RoleEnum } from './types';
import { getGameRoleTitle } from './utils';

const playerRole: Role = RoleEnum.GameMaster;

export function GamePage() {
  const roleTitle = getGameRoleTitle(playerRole);
  return (
    <>
      <h1>{roleTitle}</h1>
      <OutlineBox>
        <p>GamePage</p>
      </OutlineBox>
    </>
  );
}
