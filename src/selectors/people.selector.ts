import { createSelector } from 'reselect';
import { PeopleType } from 'constants/types';

type GlobalState = {
  people: {
    data: PeopleType[];
    loading: boolean;
  };
};

const peopleSelector = (state: GlobalState) => state.people;

export const getData = createSelector(peopleSelector, (value) => value.data);

export const getStatus = createSelector(
  peopleSelector,
  (value) => value.loading,
);
