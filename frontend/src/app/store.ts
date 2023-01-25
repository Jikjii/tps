
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import panelSlice from '../features/Panel/panelSlice';
// import postReducer from './features/post/postSlice';
// import postSlice from '../features/Post/postSlice';
// import { authApi } from './api/authApi';
// import { userApi } from './api/userApi';
// import userReducer from './features/userSlice';

export const store = configureStore({
  reducer: {
    panel: panelSlice,
    // [authApi.reducerPath]: authApi.reducer,
    // [userApi.reducerPath]: userApi.reducer,
    // userState: userReducer,
  },
//   devTools: process.env.NODE_ENV === 'development',
//   middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware({}).concat([authApi.middleware, userApi.middleware])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;