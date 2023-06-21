import { useState } from 'react';
import Modal from 'react-modal';

import { Button } from '@/components/Button';

import styles from './styles.module.scss';

type Option = 'fake' | 'artists' | '';

export function ScoreRegisterModal({
  isModalOpen,
  onCloseModal,
}: {
  isModalOpen: boolean;
  onCloseModal: () => void;
}) {
  const [selectedOption, setSelectedOption] = useState<Option>('');

  function handleFinish() {
    setSelectedOption('');
    onCloseModal();
  }

  return (
    <Modal
      isOpen={isModalOpen}
      overlayClassName={styles.modalOverlay}
      className={styles.modal}
    >
      <h3 className={styles.modalTitle}>
        Confirme qual equipe venceu a rodada:
      </h3>
      <div className={styles.modalSelectionButtons}>
        <Button
          className={selectedOption === 'fake' ? styles.selectedButton : ''}
          onClick={() => setSelectedOption('fake')}
        >
          Mestre e Fake
        </Button>
        <Button
          className={selectedOption === 'artists' ? styles.selectedButton : ''}
          onClick={() => setSelectedOption('artists')}
        >
          Artistas
        </Button>
      </div>
      <Button
        className={styles.finishButton}
        onClick={handleFinish}
        disabled={selectedOption === ''}
      >
        Confirmar
      </Button>
    </Modal>
  );
}
