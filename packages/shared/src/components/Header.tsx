import { Box, Container, Flex, Text } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './Button';

export const Header = () => {
  const { i18n } = useTranslation<'translation'>();
  const changeLang = (lang: 'en' | 'ru') => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };
  const currentLang = i18n.language;

  return (
    <Box
      pos="sticky"
      top={0}
      bg="white"
      py="md"
      style={{
        borderBottom: '1px solid #eee',
        backgroundColor: 'gray',
        zIndex: 2,
        margin: '0 auto',
      }}
    >
      <Container size="xl">
        <Flex>
          <Text style={{ fontSize: '28px' }} fw={700} size="xl">
            SA
          </Text>
          <Box ml="auto">
            <Button
              variant={currentLang === 'en' ? 'filled' : 'outline'}
              onClick={() => changeLang('en')}
              mr="sm"
              size="xs"
            >
              EN
            </Button>
            <Button
              size="xs"
              variant={currentLang === 'ru' ? 'filled' : 'outline'}
              onClick={() => changeLang('ru')}
            >
              RU
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
