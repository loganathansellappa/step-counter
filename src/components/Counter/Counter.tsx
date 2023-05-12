import React, { useState } from 'react';
import './Counter.scss';
import { isPositiveNumber } from '~/helpers/utils';

type CounterProps = {
  defaultValue?: number;
};

const Counter: React.FC<CounterProps> = ({ defaultValue = 0 }) => {
  const [counter, setCounter] = useState<number>(0);
  const [step, setStep] = useState<number | string>(() => {
    const savedStep = localStorage.getItem('step');
    return savedStep ? Number(savedStep) : defaultValue;
  });

  const [stepInvalid, setStepInvalid] = useState<boolean>(false);

  const handleIncrement = () => setCounter(counter + Number(step));
  const handleDecrement = () => setCounter(counter - +Number(step));
  const handleReset = () => setCounter(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputStep = event.target.value;
    setStep(inputStep);
    if (isPositiveNumber(Number(inputStep))) {
      localStorage.setItem('step', inputStep);
      setStepInvalid(false);
    } else {
      setStepInvalid(true);
    }
  };

  return (
    <div className='counter'>
      <div className='counter__step'>
        <label htmlFor='step-input'>Current Step value</label>
        <input
          className='counter__input'
          type='text'
          id='step-input'
          value={step}
          onChange={handleInputChange}
        />
      </div>
      <div className='counter__buttons'>
        <button className='counter__button' onClick={handleIncrement} disabled={stepInvalid}>
          +
        </button>
        <button className='counter__button' onClick={handleDecrement} disabled={stepInvalid}>
          -
        </button>
        <button className='counter__button' onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className='counter__buttons'>
        <div className='value'>Counter Value: {counter}</div>
      </div>

      {stepInvalid && (
        <div className='error'>Please enter a valid number greater than or equal to 1.</div>
      )}
    </div>
  );
};

export default Counter;
