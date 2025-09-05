// src/app/states/my-feature/my-feature.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { initialMyFeatureState } from './my-feature.state';
import * as MyFeatureActions from './my-feature.actions';

export const myFeatureReducer = createReducer(
  initialMyFeatureState,
  on(MyFeatureActions.loadMyFeatureData, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(MyFeatureActions.loadMyFeatureDataSuccess, (state, { data }) => ({
    ...state,
    data,
    loading: false,
  })),
  on(MyFeatureActions.loadMyFeatureDataFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(MyFeatureActions.addMyFeatureItem, (state, { item }) => ({
    ...state,
    data: [...state.data, item],
  }))
);