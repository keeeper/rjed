import React from 'react';
import { useSelector } from 'react-redux';
import Joke from './Joke';
import Button from './Button';

const App = () => {
  const joke = useSelector(state => state.main.jokes[state.main.currentJokeId]);
  
  return (
    <div className='site-container'>
      <main className='main'>
        <div className='wrapper'>
            <Joke text={joke.content} />
        </div>
      </main>
      <footer>
        <div className='wrapper'>
          <Button name="Next" />
        </div>
      </footer>
    </div>
  )
}

export default App;
