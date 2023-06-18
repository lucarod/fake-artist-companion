import { ReactNode } from 'react';

import styles from './styles.module.scss';

type ButtonType = 'button' | 'submit' | 'reset' | undefined;

export function Button({
  type,
  children,
}: {
  type: ButtonType;
  children: ReactNode;
}) {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}
