import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

export function RootPage() {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
}
