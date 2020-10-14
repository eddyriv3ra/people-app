import {
  GET_PEOPLE_PENDING,
  GET_PEOPLE_ERROR,
  GET_PEOPLE_SUCCESS,
  FIND_PERSON,
  REMOVE_PERSON,
  SystemState,
  GetPeoplePendingType,
  GetPeopleErrorType,
  GetPeopleSuccessType,
  FindPersonType,
  RemovePersonType,
  PeopleType,
} from 'constants/types';

const initialState = {
  data: [],
  loading: false,
};

type PeopleActionTypes =
  | GetPeoplePendingType
  | GetPeopleErrorType
  | GetPeopleSuccessType
  | FindPersonType
  | RemovePersonType;

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
    case FIND_PERSON:
      return {
        ...state,
        data: state.data.filter((value: PeopleType) =>
          value.name
            .toLocaleLowerCase()
            .includes(action.name.toLocaleLowerCase()),
        ),
      };
    case REMOVE_PERSON:
      return {
        ...state,
        data: state.data.filter(
          (value: PeopleType) => value.name !== action.name,
        ),
      };
    default:
      return state;
  }
};

export default people;
