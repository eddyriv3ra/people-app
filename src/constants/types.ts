export const GET_PEOPLE = 'GET_PEOPLE';
export const GET_PEOPLE_PENDING = 'GET_PEOPLE_PENDING';
export const GET_PEOPLE_ERROR = 'GET_PEOPLE_ERROR';
export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS';
export const FIND_PERSON = 'FIND_PERSON';
export const REMOVE_PERSON = 'REMOVE_PERSON';

export type SystemState = {
  data: PeopleType[];
  loading: boolean;
};

export type GetPeopleType = {
  type: typeof GET_PEOPLE;
};

export type GetPeoplePendingType = {
  type: typeof GET_PEOPLE_PENDING;
};

export type GetPeopleErrorType = {
  type: typeof GET_PEOPLE_ERROR;
};

export type GetPeopleSuccessType = {
  type: typeof GET_PEOPLE_SUCCESS;
  data: PeopleType[];
};

export type FindPersonType = {
  type: typeof FIND_PERSON;
  name: string;
};

export type RemovePersonType = {
  type: typeof REMOVE_PERSON;
  name: string;
};

export type PeopleType = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
};
