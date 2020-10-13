export const GET_PEOPLE = 'GET_PEOPLE';
export const GET_PEOPLE_PENDING = 'GET_PEOPLE_PENDING';
export const GET_PEOPLE_ERROR = 'GET_PEOPLE_ERROR';
export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS';

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
