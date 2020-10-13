import { GET_PEOPLE, GET_PEOPLE_PENDING } from 'constants/types';

type GetPeopleType = {
  type: typeof GET_PEOPLE;
};

type GetPeoplePendingType = {
  type: typeof GET_PEOPLE_PENDING;
};

export const getPeople = (): GetPeopleType => ({
  type: GET_PEOPLE,
});

export const getPeoplePending = (): GetPeoplePendingType => ({
  type: GET_PEOPLE_PENDING,
});
