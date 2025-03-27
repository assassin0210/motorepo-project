import { Box, Container } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { Banner, Footer, Header, TabItem, Tabs } from '@shared';
import React, { Suspense } from 'react';

const SneakersProject = React.lazy(() => import('@sneakers-project/App'));
const ShortsProject = React.lazy(() => import('@shorts-project/App'));

export const App = () => {
  const { t } = useTranslation();

  const tabs: TabItem[] = [
    {
      label: t('tabs.sneaker'),
      value: '1',
      content: (
        <Suspense fallback={<div>Loading...</div>}>
          <SneakersProject />
        </Suspense>
      ),
    },
    {
      label: t('tabs.shorts'),

      value: '2',
      content: (
        <Suspense fallback={<div>Loading...</div>}>
          <ShortsProject />
        </Suspense>
      ),
    },
  ];

  return (
    <Box pos="relative">
      <Header />
      <Container size="xl">
        <Banner title={t('discount', { percent: 20 })} subtitle={t('discountNote')} />
        <Tabs tabs={tabs} defaultValue={'1'} />
      </Container>
      <Footer />
    </Box>
  );
};
