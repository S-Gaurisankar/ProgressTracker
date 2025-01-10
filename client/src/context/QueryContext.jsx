import React, { createContext, useState, useContext } from 'react';

const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
  const [query, setQuery] = useState('');

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      {children}
    </QueryContext.Provider>
  );
};

// export const useQuery = () => useContext(QueryContext);

export function useQuery() {
  const context = useContext(QueryContext);
  if (context === undefined) {
    throw new Error('useQuery must be used within a QueryProvider');
  }
  return context;
}