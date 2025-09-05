// src/app/states/my-feature/my-feature.actions.ts
import { createAction, props } from '@ngrx/store';

export const loadMyFeatureData = createAction('[My Feature] Load Data');
export const loadMyFeatureDataSuccess = createAction(
  '[My Feature] Load Data Success',
  props<{ data: string[] }>()
);
export const loadMyFeatureDataFailure = createAction(
  '[My Feature] Load Data Failure',
  props<{ error: any }>()
);
export const addMyFeatureItem = createAction(
  '[My Feature] Add Item',
  props<{ item: string }>()
);