import { ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

export const AppShell = ({ children }: { children: ReactNode }) => {
  return <MantineProvider>{children}</MantineProvider>;
};
