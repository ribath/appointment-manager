/* eslint-disable no-empty-pattern */
import { createSlice } from '@reduxjs/toolkit';
import Appointment from '../interfaces/Appointment';

const initialState: Appointment[] = [];

export const appointmentSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const {
  addAppointment
} = appointmentSlice.actions;

export default appointmentSlice.reducer;
