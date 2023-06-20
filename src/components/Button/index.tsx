import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ReactNode,
} from 'react';

import styles from './styles.module.scss';

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
}

export function Button({
  children,
  type,
  className,
  ...props
}: ButtonProps & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${styles.button} ${className}`} type={type} {...props}>
      {children}
    </button>
  );
}
