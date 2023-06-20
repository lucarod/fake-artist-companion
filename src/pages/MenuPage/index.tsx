import { Outlet } from 'react-router-dom';

import { OutlineBox } from '@/components/OutlineBox';

import styles from './styles.module.scss';

export function MenuPage() {
  return (
    <>
      <header>
        <h1 className={styles.title}>Fake Artist Companion</h1>
      </header>
      <main className={styles.content}>
        <OutlineBox>
          <Outlet />
        </OutlineBox>
      </main>
    </>
  );
}
