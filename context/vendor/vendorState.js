import { useReducer } from 'react';
import VendorContext from './vendorContext';
import VendorReducer from './vendorReducer';

import {} from '../types';

export default function VendorState({ children }) {
  const initialState = {};

  const [state, dispatch] = useReducer(VendorReducer, initialState);

  const {} = initialState;

  return <VendorContext.Provider value={{}}>{children}</VendorContext.Provider>;
}
