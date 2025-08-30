import { FC, useMemo } from 'react';

import { ITab, TFilter } from 'types/model';

import { Tab } from './components/Tab';
import * as S from './styled';

interface Props {
  tabs: ITab[];
  onChange: (tabId: TFilter) => void;
  activeId: string;
}

export const Tabs: FC<Props> = ({ tabs = [], onChange, activeId }) => {
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
