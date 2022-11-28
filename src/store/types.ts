import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import store from '.';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type BaseAction = Parameters<typeof store.dispatch>[0];
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ThunkDispatch<RootState, undefined, BaseAction>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  BaseAction
>;
