import { WordDisplay } from '@/components/WordDisplay';

import styles from './styles.module.scss';

export function ArtistScreen({ isWordSelected }: { isWordSelected: boolean }) {
  return (
    <div>
      {!isWordSelected && (
        <p className={styles.waitScreen}>
          Aguarde o mestre selecionar a palavra...
        </p>
      )}
      {isWordSelected && <WordDisplay />}
    </div>
  );
}
