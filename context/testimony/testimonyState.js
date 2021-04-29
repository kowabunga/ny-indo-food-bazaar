import { useReducer } from 'react';
import TestimonyContext from './testimonyContext';
import TestimonyReducer from './testimonyReducer';

import {} from '../types';

export default function TestimonyState({ children }) {
  const initialState = {};

  const [state, dispatch] = useReducer(TestimonyReducer, initialState);

  const {} = initialState;

  return (
    <TestimonyContext.Provider value={{}}>{children}</TestimonyContext.Provider>
  );
}
