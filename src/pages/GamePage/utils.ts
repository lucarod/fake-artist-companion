import { RoleEnum } from './types';

export function getGameRoleTitle(playerRole: string) {
  if (playerRole === RoleEnum.GameMaster) return 'Você é o mestre do jogo';
  if (playerRole === RoleEnum.FakeArtist) return 'Você é o artista falso';
  return 'Você é um artista';
}
