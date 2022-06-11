import React from 'react';
import './App.css';
import { StoreProvider } from './context/StoreContext';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Dashboard />
      </StoreProvider>
    </div>
  );
}

export default App;
