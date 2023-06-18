import { Link } from '@/components/Link';

import styles from './styles.module.scss';

export function MainLobbyPage() {
  return (
    <nav role="navigation">
      <ul className={styles.navlist}>
        <li>
          <Link to="create">Criar Sala</Link>
        </li>
        <li>
          <Link to="join">Entrar em Sala</Link>
        </li>
      </ul>
    </nav>
  );
}
