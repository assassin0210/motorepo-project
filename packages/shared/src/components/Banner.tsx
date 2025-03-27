import React, { ReactNode } from 'react';
import { Card as MantineCard, Text } from '@mantine/core';

interface IProps {
  title: ReactNode;
  subtitle: ReactNode;
}
export const Banner = ({ subtitle, title }: IProps) => {
  return (
    <MantineCard
      mt={24}
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      style={{
        background: 'linear-gradient(135deg, #f0e8ff, #e2d4f7)',
      }}
    >
      <Text style={{ fontSize: 48 }} size={'xl'} fw={700}>
        {title}
      </Text>
      <Text size="xl" c="dimmed">
        {subtitle}
      </Text>
    </MantineCard>
  );
};
