import { createAction, createReducer } from "@reduxjs/toolkit";
import jokes from '../data/jokes';
import splash from '../data/splash';
import { getRandomId } from "../utils/utils";

const firstJokeId = getRandomId(jokes);

const initialState = {
  splashText: splash,
  isLoading: false,
  jokes: jokes,
  currentJokeId: firstJokeId,
  jokesAlreadyRead: [firstJokeId]
}

export const nextJoke = createAction('NEXT_JOKE');
export const toggleLoading = createAction('TOGGLE_LOADING');
export const addToRead = createAction('ADD_TO_READ');

export default createReducer(initialState, {
  [nextJoke]: function (state, action) {
    state.currentJokeId = action.payload;
    state.jokesAlreadyRead = state.jokesAlreadyRead.includes(action.payload) ? [...state.jokesAlreadyRead] : [...state.jokesAlreadyRead, action.payload];
  },
  [toggleLoading]: function(state, action) {
    state.isLoading = action.payload;
  },
})