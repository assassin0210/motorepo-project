import React, { ReactNode, useState } from 'react';
import { Tabs as MTabs, Text } from '@mantine/core';

export interface TabItem {
  label: string;
  value: string;
  content: ReactNode;
}

interface IProps {
  tabs: TabItem[];
  defaultValue?: string;
}

export const Tabs = ({ tabs = [], defaultValue }: IProps) => {
  const _defaultValue = defaultValue ?? tabs?.[0]?.value ?? '';

  const [activeTab, setActiveTab] = useState(_defaultValue);

  const active = tabs.find((t) => t.value === activeTab);

  return (
    <MTabs
      value={activeTab}
      onChange={(val) => setActiveTab(val!)}
      mt={12}
      mb={24}
      defaultValue={_defaultValue}
    >
      <MTabs.List>
        {tabs.map((tab) => (
          <MTabs.Tab key={tab.value} value={tab.value}>
            <Text fw={500}>{tab.label}</Text>
          </MTabs.Tab>
        ))}
      </MTabs.List>

      {active && (
        <MTabs.Panel key={active.value} value={active.value} pt="xs">
          {active.content}
        </MTabs.Panel>
      )}
    </MTabs>
  );
};
