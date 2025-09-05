// fruit.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Fruit } from './ibook';

export const selectFruits = createFeatureSelector<Fruit[]>('fruits');