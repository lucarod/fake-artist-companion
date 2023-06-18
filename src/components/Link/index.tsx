import { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import styles from './styles.module.scss';

export function Link({ to, children }: { to: string; children: ReactNode }) {
  return (
    <RouterLink className={styles.link} to={to}>
      {children}
    </RouterLink>
  );
}
