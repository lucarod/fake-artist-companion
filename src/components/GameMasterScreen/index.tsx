import { useState } from 'react';

import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { WordDisplay } from '@/components/WordDisplay';
import { Button } from '@/components/Button';

import styles from './styles.module.scss';
import { ScoreRegisterModal } from '../ScoreRegisterModal';

const validationSchema = z.object({
  theme: z.string().min(1),
  word: z.string().min(1),
});

type ValidationSchemaType = z.infer<typeof validationSchema>;

export function GameMasterScreen({
  isWordSelected,
}: {
  isWordSelected: boolean;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { register, handleSubmit, formState } = useForm<ValidationSchemaType>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
    console.log({ data, formState });
  };

  function openModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      {!isWordSelected && (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            {...register('theme')}
            placeholder="Digite o tema"
          />
          <input
            type="text"
            {...register('word')}
            placeholder="Digite a palavra"
          />
          <Button type="submit">Criar sala</Button>
        </form>
      )}

      {isWordSelected && (
        <>
          <WordDisplay />
          <Button
            type="button"
            className={styles.reportButton}
            onClick={openModal}
          >
            Reportar Resultado
          </Button>
          <ScoreRegisterModal
            isModalOpen={isModalOpen}
            onCloseModal={handleCloseModal}
          />
        </>
      )}
    </>
  );
}
