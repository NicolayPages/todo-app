import { ITab, TFilter } from 'types/model';

export interface TabsProps {
  tabs: ITab[];
  onChange: (tabId: TFilter) => void;
  activeId: string;
}
