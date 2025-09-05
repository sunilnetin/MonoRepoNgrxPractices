// fruit.actions.ts
import { createAction, props } from '@ngrx/store';
import { Fruit } from './ibook';

export const loadFruits = createAction('[Fruit] Load Fruits');
export const loadFruitsSuccess = createAction(
    '[Fruit] Load Fruits Success',
    props<{ fruits: Fruit[] }>()
);