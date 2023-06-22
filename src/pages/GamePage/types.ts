export enum RoleEnum {
  GameMaster = 'game-master',
  FakeArtist = 'fake-artist',
  Artist = 'artist',
}

export type GameState = 'roundOn' | 'endOfRound' | 'endOfGame';

export type Role = RoleEnum;
