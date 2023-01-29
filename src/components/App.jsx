import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {nextJoke} from '../store/mainReducer';
import { getRandomId } from "../utils/utils";
import Joke from './Joke';
import Button from './Button';

const App = () => {
  const dispatch = useDispatch();
  
  const jokes = useSelector(state => state.main.jokes);
  const joke = useSelector(state => jokes[state.main.currentJokeId]);
  const jokesAlreadyRead = useSelector(state => state.main.jokesAlreadyRead);
  const isLoading  = useSelector(state => state.main.isLoading);
  
  const allJokesAreRead = jokesAlreadyRead.length === jokes.length;

  function getNextJoke() {
    let newId = getRandomId(jokes);
    const wasAlreadyRead = jokesAlreadyRead.includes(newId);
    if (wasAlreadyRead) {
      getNextJoke();
    } else {
      dispatch(nextJoke(newId));
    }
  }
  
  return (
    <div className='site-container'>
      <main className='main'>
        <div className='wrapper'>
            <Joke text={joke.content} />
        </div>
      </main>
      <footer>
        <div className='wrapper'>
          {allJokesAreRead ? (
            <p className="message">All jokes have been read</p>
          ) : (
            <Button buttonName="next" buttonAltName="skip" clickHandler={getNextJoke} isLoading={isLoading}  />
          )}
        </div>
      </footer>
    </div>
  )
}

export default App;
