import React from 'react';
import { useLocalStore } from 'mobx-react';

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalStore( () => ({
    json: null,
    expression: '',
    // json: JSON.parse(`{"quiz":{"sport":{"q1":{"question":"Which one is correct team name in NBA?","options":["New York Bulls","Los Angeles Kings","Golden State Warriros","Huston Rocket"],"answer":"Huston Rocket"}},"maths":{"q1":{"question":"5 + 7 = ?","options":["10","11","12","13"],"answer":"12"},"q2":{"question":"12 - 8 = ?","options":["1","2","3","4"],"answer":"4"}}}}`),
    matched: [],
    error: '',
    setJson: (json) => { store.json = json; },
    setExpression: (expression) => { store.expression = expression; },
    setMatched: (matched) => { store.matched.push(matched); },
    resetMatched: () => { store.matched = []; },
    setError: (error) => { store.error = error; },
  }));

  return (
    <StoreContext.Provider value={store}>{ children }</StoreContext.Provider>
  )
}

export default StoreProvider;