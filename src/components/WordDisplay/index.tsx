import styles from './styles.module.scss';

export function WordDisplay() {
  return (
    <>
      <div className={styles.container}>
        <p>Tema selecionado:</p>
        <span>Animais</span>
      </div>
      <div className={styles.container}>
        <p>Palavra selecionada:</p>
        <span>Cachorro</span>
      </div>
    </>
  );
}
