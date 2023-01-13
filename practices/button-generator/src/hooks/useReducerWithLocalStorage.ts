import { useReducer } from 'react';
import { Action } from '../reducer/button.reducer';

/**
 * Custom Hook to sync localStorage with reducer function.
 * @param {string} key: the key of localStorage
 * @param {<S, Action>} reducer: reducer function
 * @returns: state and dispatch
 */
export const useReducerWithLocalStorage = <S>(key: string, reducer: React.Reducer<S, Action>) => {
  const reducerWithLocalStorage = (_reducer: React.Reducer<S, Action>) => (state: S, action: Action) => {
    const updateState = _reducer(state, action);

    localStorage.setItem(key, JSON.stringify(updateState));

    return updateState;
  };

  const initialState = JSON.parse(localStorage.getItem(key) as string) || [];
  const [state, dispatch] = useReducer(reducerWithLocalStorage(reducer), initialState);

  return [state, dispatch] as const;
};
