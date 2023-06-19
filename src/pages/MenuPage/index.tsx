import { Outlet } from 'react-router-dom';

import { OutlineBox } from '@/components/OutlineBox';

import styles from './styles.module.scss';

export function MenuPage() {
  return (
    <>
      <h1 className={styles.title}>Fake Artist Companion</h1>
      <OutlineBox>
        <Outlet />
      </OutlineBox>
    </>
  );
}
