import {
  GET_PEOPLE,
  GET_PEOPLE_PENDING,
  GET_PEOPLE_ERROR,
  GET_PEOPLE_SUCCESS,
  GetPeopleType,
  GetPeoplePendingType,
  GetPeopleErrorType,
  GetPeopleSuccessType,
  PeopleType,
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
