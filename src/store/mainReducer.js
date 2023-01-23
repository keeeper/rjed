import { createAction, createReducer } from "@reduxjs/toolkit";
// import { getRandomId } from "../utils/utils";

const initialState = {
  isLoading: false,
  jokes: ['Optimistic boy visits doctor', 'Student and lamp', 'Bus in Odessa'],
  currentJokeId: 0
}

export const nextJoke = createAction('NEXT_JOKE');

export default createReducer(initialState, {
  [nextJoke]: function (state) {
    state.currentJokeId = state.currentJokeId < state.jokes.length - 1 ? state.currentJokeId + 1 : 0;
  }
})