import { useState } from 'react';
import { Container, SimpleGrid, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Button, ISummary, Summary } from '@shared';

export const Shorts = () => {
  const { t } = useTranslation();
  const { visibleCount, allShorts, handleShowMore } = useConfig();

  return (
    <Container size="xl" py="md">
      <Title mb="lg">{t('shortsCollection')}</Title>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
        {allShorts.slice(0, visibleCount).map((sneaker) => (
          <Summary key={sneaker.id} {...sneaker} />
        ))}
      </SimpleGrid>

      {visibleCount < allShorts.length && (
        <Button fullWidth mt="xl" variant="light" onClick={handleShowMore}>
          {t('buttons.showMore')}
        </Button>
      )}
    </Container>
  );
};

const useConfig = () => {
  const { t } = useTranslation();
  const allShorts: ISummary[] = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    title: `${t('shorts', { number: i + 1 })}`,
    description: t('shortsDescription'),
    image: `https://images.asos-media.com/products/adidas-originals-essential-shorts-in-black/206066671-1-black/?$n_480w$&wid=476&fit=constrain`,
  }));

  const [visibleCount, setVisibleCount] = useState(6);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return { handleShowMore, visibleCount, allShorts };
};
