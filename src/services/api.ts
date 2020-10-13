import { PeopleType } from 'constants/types';

const fetchPeople = async (): Promise<PeopleType[]> => {
  const url = 'https://swapi.dev/api/people/';
  try {
    const { results } = await (await fetch(url)).json();
    return results;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default fetchPeople;
