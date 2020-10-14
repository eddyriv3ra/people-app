import {
  GET_PEOPLE_PENDING,
  GET_PEOPLE_ERROR,
  GET_PEOPLE_SUCCESS,
  SET_FILTER_VALUE,
  REMOVE_PERSON,
  SystemState,
  GetPeoplePendingType,
  GetPeopleErrorType,
  GetPeopleSuccessType,
  SetFilterType,
  RemovePersonType,
  PeopleType,
} from 'constants/types';

const initialState = {
  data: [],
  loading: false,
  filterValue: '',
};

type PeopleActionTypes =
  | GetPeoplePendingType
  | GetPeopleErrorType
  | GetPeopleSuccessType
  | SetFilterType
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
    case SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.value,
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
