import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';

//Redux store
import  store from '../src/services/store'

//Components
import App from './App';

afterEach(cleanup);

const renderWithRedux = (component) =>{
  return {
    ...render(<Provider store={store}> {component}</Provider>)
  }
}

//Test method of app rendering with redux store
test('app render with redux', () => {
  const { getByTestId, getByText } = renderWithRedux(<App />)
  console.log("01. App render with redux", getByTestId, getByText );
});
