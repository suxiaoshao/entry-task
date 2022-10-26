import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import store from '.';

export type ActionEnum<
  Type extends string,
  Payload = undefined,
> = Payload extends undefined
  ? {type: Type}
  : {
      type: Type;
      payload: Payload;
    };
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
