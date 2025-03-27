import React, { forwardRef } from 'react';
import { Button as MantineButton, ButtonProps } from '@mantine/core';

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps &
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
>((props, ref) => {
  return <MantineButton ref={ref} {...props} />;
});

Button.displayName = 'Button';
