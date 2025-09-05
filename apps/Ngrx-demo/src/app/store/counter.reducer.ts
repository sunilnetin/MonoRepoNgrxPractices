// export interface CounterState {
//   count: number;
// }

// export const initialState: CounterState = {
//   count: 0,
// };


import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';
//import { counterReducer } from './store/counter.reducer';
import { CounterState ,initialState } from './counter.model';

export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({ count: state.count + 1 })),
  on(decrement, state => ({ count: state.count - 1 })),
  on(reset, state => ({ count: 0 }))
);