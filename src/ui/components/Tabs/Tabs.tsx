import { FC, useMemo } from 'react';

import { TabsProps } from './Tabs.interface';
import { Tab } from './components/Tab';
import * as S from './styled';

export const Tabs: FC<TabsProps> = ({ tabs = [], onChange, activeId }) => {
  const tabsList = useMemo(() => {
    return tabs.map(item => {
      return (
        <Tab
          key={item.id}
          isActive={activeId === item.id}
          data={item}
          onChange={onChange}
        />
      );
    });
  }, [tabs, onChange, activeId]);

  return <S.Wrapper>{tabsList}</S.Wrapper>;
};
