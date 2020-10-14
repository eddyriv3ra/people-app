import { createSelector } from 'reselect';
import { PeopleType } from 'constants/types';

type GlobalState = {
  people: {
    data: PeopleType[];
    loading: boolean;
    filterValue: string;
  };
};

const peopleSelector = (state: GlobalState) => state.people;

export const getData = createSelector(peopleSelector, (value) => value.data);

export const getStatus = createSelector(
  peopleSelector,
  (value) => value.loading,
);

export const getFilterValue = createSelector(
  peopleSelector,
  (value) => value.filterValue,
);

export const getFilteredData = createSelector(
  getData,
  getFilterValue,
  (data, filterValue) =>
    data.filter((value) => value.name.toLowerCase().includes(filterValue)),
);
