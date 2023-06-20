import { OutlineBox } from '@/components/OutlineBox';

import styles from './styles.module.scss';

export function WordDisplay() {
  return (
    <OutlineBox>
      <div className={styles.container}>
        <p>Tema selecionado:</p>
        <span>Animais</span>
      </div>
      <div className={styles.container}>
        <p>Palavra selecionada:</p>
        <span>Cachorro</span>
      </div>
    </OutlineBox>
  );
}
