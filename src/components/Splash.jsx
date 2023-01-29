import React from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import AnimatedText from './AnimatedText';

const Splash = ({clickHandler, text, isLoading}) => {
  const dispatch = useDispatch();

  return (
    <div className='site-container'>
      <main className='main'>
        <div className='wrapper'>
          <AnimatedText text={text} />
        </div>
      </main>
      {!isLoading && (
        <footer className='footer'>
          <div className='wrapper'>
            <Button buttonName="Proceed" clickHandler={clickHandler} />
          </div>
        </footer>
      )}
    </div>
  )
}

export default Splash;
