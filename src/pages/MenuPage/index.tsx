import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

export function MenuPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fake Artist Companion</h1>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
