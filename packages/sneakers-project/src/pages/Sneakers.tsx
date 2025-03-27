import { useTranslation } from 'react-i18next';
import { Button, ISummary, Summary } from '@shared';
import { useState } from 'react';
import { Container, SimpleGrid, Title } from '@mantine/core';

export const Sneakers = () => {
  const { t } = useTranslation();
  const { allSneakers, visibleCount, handleShowMore } = useConfig();
  return (
    <Container size="xl" py="md">
      <Title mb="lg">{t('sneakerCollection')}</Title>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {allSneakers.slice(0, visibleCount).map((sneaker) => (
          <Summary key={sneaker.id} {...sneaker} />
        ))}
      </SimpleGrid>

      {visibleCount < allSneakers.length && (
        <Button fullWidth mt="xl" variant="light" onClick={() => handleShowMore()}>
          {t('buttons.showMore')}
        </Button>
      )}
    </Container>
  );
};

const useConfig = () => {
  const { t } = useTranslation();

  const allSneakers: ISummary[] = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `${t('sneaker', { number: i + 1 })}`,
    description: t('sneakerDescription'),
    image: `https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  }));

  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };
  return { handleShowMore, visibleCount, allSneakers };
};
