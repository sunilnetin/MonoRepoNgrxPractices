// src/app/states/my-feature/my-feature.state.ts
export interface MyFeatureState {
  data: string[];
  loading: boolean;
  error: any;
}

export const initialMyFeatureState: MyFeatureState = {
  data: [],
  loading: false,
  error: null,
};