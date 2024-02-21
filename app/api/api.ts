import {mockCategories, mockTags} from './mock.ts';

export const API_getCategories = () => {
  return Promise.resolve(mockCategories);
};

export const API_getTags = (categoryId: string) => {
  return mockTags[categoryId]
    ? Promise.resolve(mockTags[categoryId])
    : Promise.reject('invalid: categoryId');
};

interface item {
  id: string;
  level: number;
}
export const API_saveTags = (payload: Array<item>) => {
  return Promise.resolve();
};
