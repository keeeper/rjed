import React from 'react';
import { useSelector } from 'react-redux';
import Joke from './Joke';
import Button from './Button';


const App = () => {
  const joke = useSelector(state => state.main.jokes[state.main.currentJokeId]);
  
  return (
    <div className='app'>
      <Joke text={joke} />
      <Button name="Next" />
    </div>
  )
}

export default App;
