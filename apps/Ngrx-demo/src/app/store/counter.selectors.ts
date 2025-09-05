// counter.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.model';

export const selectCounterState = createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(
  selectCounterState,
  (state: CounterState) => state.count
);