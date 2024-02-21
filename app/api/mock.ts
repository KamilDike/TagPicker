import {Tag} from '../interfaces/Tag.ts';
import {Category} from '../interfaces/Category.ts';

export const mockCategories: Array<Category> = [
  {id: 'hobbies', name: 'twoje hobby'},
  {id: 'skills', name: 'twoje umiejętności'},
  {id: 'food', name: 'twoje ulubione jedzenie'},
];

export const mockTags: Record<string, Array<Tag>> = {
  [mockCategories[0].id]: [
    {id: 'hobby0', name: 'hobby1', isLevelAvailable: true},
    {id: 'hobby1', name: 'hobby2', isLevelAvailable: false},
    {id: 'hobby2', name: 'hobby3', isLevelAvailable: false},
  ],
  [mockCategories[1].id]: [
    {id: 'skill0', name: 'umiejętność1', isLevelAvailable: false},
    {id: 'skill1', name: 'umiejętność2', isLevelAvailable: true},
    {id: 'skill2', name: 'umiejętność3', isLevelAvailable: false},
  ],
  [mockCategories[2].id]: [
    {id: 'food0', name: 'jedzenie1', isLevelAvailable: false},
    {id: 'food1', name: 'jedzenie2', isLevelAvailable: false},
    {id: 'food2', name: 'jedzenie3', isLevelAvailable: true},
  ],
};
