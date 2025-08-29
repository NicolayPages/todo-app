import { ITab } from 'types/model';

import { TODO_FILTER } from './todoFilter';

const { ALL, COMPLETED, NOT_COMPLETED } = TODO_FILTER;

export const TODO_TABS: ITab[] = [
  {
    title: 'Все',
    id: ALL,
  },
  {
    title: 'Завершенные',
    id: COMPLETED,
  },
  {
    title: 'Незавершенные',
    id: NOT_COMPLETED,
  },
];
