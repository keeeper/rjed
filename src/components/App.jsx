import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {nextJoke} from '../store/mainReducer';
import { getRandomId } from "../utils/utils";
import AnimatedText from './AnimatedText';
import Button from './Button';
import Splash from './Splash';

const App = () => {
  const dispatch = useDispatch();
  
  const jokes = useSelector(state => state.main.jokes);
  const joke = useSelector(state => jokes[state.main.currentJokeId]);
  const jokesAlreadyRead = useSelector(state => state.main.jokesAlreadyRead);
  const splashText = useSelector(state => state.main.splashText);
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

  function skipSplash() {
    localStorage.setItem("firstLoad", "true");
    getNextJoke();
  }

  if (!localStorage.getItem("firstLoad")){
    return <Splash clickHandler={skipSplash} text={splashText} isLoading={isLoading} />
  }

  return (
    <div className='site-container'>
      <main className='main'>
        <div className='wrapper'>
            <AnimatedText text={joke.content} />
        </div>
      </main>
      <footer className='footer'>
        <div className='wrapper'>
          {allJokesAreRead ? (
            <p className="message">You've made it! Come back soon!</p>
          ) : (
            <Button buttonName="next" buttonAltName="skip" clickHandler={getNextJoke} isLoading={isLoading}  />
          )}
        </div>
      </footer>
    </div>
  )
}

export default App;
