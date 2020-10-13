import {
  GET_PEOPLE_PENDING,
  GET_PEOPLE_ERROR,
  SystemState,
  GetPeoplePendingType,
  GetPeopleErrorType,
  GetPeopleSuccessType,
  GET_PEOPLE_SUCCESS,
} from 'constants/types';

const initialState = {
  data: [],
  loading: false,
};

type PeopleActionTypes =
  | GetPeoplePendingType
  | GetPeopleErrorType
  | GetPeopleSuccessType;

const people = (
  state = initialState,
  action: PeopleActionTypes,
): SystemState => {
  switch (action.type) {
    case GET_PEOPLE_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_PEOPLE_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case GET_PEOPLE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default people;
