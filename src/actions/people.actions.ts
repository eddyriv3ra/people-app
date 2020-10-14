import {
  GET_PEOPLE,
  GET_PEOPLE_PENDING,
  GET_PEOPLE_ERROR,
  GET_PEOPLE_SUCCESS,
  FIND_PERSON,
  REMOVE_PERSON,
  GetPeopleType,
  GetPeoplePendingType,
  GetPeopleErrorType,
  GetPeopleSuccessType,
  PeopleType,
  FindPersonType,
  RemovePersonType,
} from 'constants/types';

export const getPeople = (): GetPeopleType => ({
  type: GET_PEOPLE,
});

export const getPeoplePending = (): GetPeoplePendingType => ({
  type: GET_PEOPLE_PENDING,
});

export const getPeopleSuccess = (data: PeopleType[]): GetPeopleSuccessType => ({
  type: GET_PEOPLE_SUCCESS,
  data,
});

export const getPeopleError = (): GetPeopleErrorType => ({
  type: GET_PEOPLE_ERROR,
});

export const findPerson = (name: string): FindPersonType => ({
  type: FIND_PERSON,
  name,
});

export const removePerson = (name: string): RemovePersonType => ({
  type: REMOVE_PERSON,
  name,
});
