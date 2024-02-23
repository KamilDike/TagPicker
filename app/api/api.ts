import {mockCategories, mockTags} from './mock.ts';
import {TagPayload} from '../interfaces/Tag.ts';

export const API_getCategories = () => {
  return Promise.resolve(mockCategories);
};

export const API_getTags = (categoryId: string) => {
  return mockTags[categoryId]
    ? Promise.resolve(mockTags[categoryId])
    : Promise.reject('invalid: categoryId');
};

export const API_saveTags = (payload: Array<TagPayload>) => {
  console.log('saved tags: ', {payload});
  return Promise.resolve(payload);
};
