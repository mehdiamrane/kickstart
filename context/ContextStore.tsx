import React, { createContext } from 'react';

interface IContextStore {
  example: string;
}

const defaultContext = {
  example: 'example',
};

// Create context
export const ContextStore = createContext<IContextStore>(defaultContext);

// Provider with data inside
export const StoreProvider = (props: React.PropsWithChildren) => {
  return (
    <ContextStore.Provider value={{ example: 'example' }}>{props.children}</ContextStore.Provider>
  );
};
