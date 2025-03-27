import { Box, Text } from '@mantine/core';
import React from 'react';

export const Footer = () => {
  return (
    <Box p="lg" mt="xl" style={{ borderTop: '1px solid #eee' }}>
      <Text ta="center" c="dimmed">
        © 2025 by <a href="https://www.alexsool.dev/">Alex Sokolov </a>
      </Text>
    </Box>
  );
};
