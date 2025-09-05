import { createAction, createFeatureSelector } from '@ngrx/store';
import { book } from './ibook';
import { initialState  } from './counter.model';

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');
export const customIncrement = createFeatureSelector<book[]>('book');

//export const increment = createAction('[Counter] Increment');
//export const decrement = createAction('[Counter] Decrement');
//export const reset = createAction('[Counter] Reset');
