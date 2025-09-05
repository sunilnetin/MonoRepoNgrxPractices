// fruit.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loadFruitsSuccess } from './fruit.actions';
import { Fruit } from './ibook';

export const initialState: Fruit[] = [];

export const fruitReducer = createReducer(
  initialState,
  on(loadFruitsSuccess, (state, { fruits }) => [...fruits])
);