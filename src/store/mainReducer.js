import { createAction, createReducer } from "@reduxjs/toolkit";
// import { getRandomId } from "../utils/utils";
import jokes from '../data/jokes';

const initialState = {
  isLoading: false,
  jokes: jokes,
  currentJokeId: 0
}

export const nextJoke = createAction('NEXT_JOKE');
export const toggleLoading = createAction('TOGGLE_LOADING');

export default createReducer(initialState, {
  [nextJoke]: function (state) {
    state.currentJokeId = state.currentJokeId < state.jokes.length - 1 ? state.currentJokeId + 1 : 0;
  },
  [toggleLoading]: function(state) {
    state.isLoading = !state.isLoading;
  }
})