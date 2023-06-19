import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/Button';
import { Link } from '@/components/Link';

import styles from './styles.module.scss';

const validationSchema = z.object({
  name: z.string().min(1),
});

type ValidationSchemaType = z.infer<typeof validationSchema>;

export function CreateLobbyPage() {
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState } =
    useForm<ValidationSchemaType>({
      resolver: zodResolver(validationSchema),
    });

  const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
    console.log({ data, formState });
    navigate('/game/1234');
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('name')}
        placeholder="Digite seu nome"
        autoComplete="off"
      />
      <footer className={styles.formFooter}>
        <Link to="/">Voltar</Link>
        <Button type="submit">Criar sala</Button>
      </footer>
    </form>
  );
}
