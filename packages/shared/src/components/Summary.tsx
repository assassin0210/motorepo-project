import { Card, Image, Text, Title } from '@mantine/core';

export interface ISummary {
  id: number | string;
  title: string;
  description: string;
  image: string;
}

export const Summary = (item: ISummary) => {
  return (
    <Card key={item.id} shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={item.image} alt={item.title} height={400} fit="cover" />
      </Card.Section>
      <Title order={4} mt="md">
        {item.title}
      </Title>
      <Text size="sm" mt="xs" c="dimmed">
        {item.description}
      </Text>
    </Card>
  );
};
