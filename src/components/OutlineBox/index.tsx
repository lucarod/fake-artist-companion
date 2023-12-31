import { ReactNode } from 'react';

import styles from './styles.module.scss';

export function OutlineBox({ children }: { children: ReactNode }) {
  return <div className={styles.outlineBox}>{children}</div>;
}
