import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import appointmentSlice from './appoinmentSlice';

export const store = configureStore({
  reducer: {
    appState: appointmentSlice
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
