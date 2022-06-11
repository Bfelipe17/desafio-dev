import React from 'react';
import './App.css';
import { StoreProvider } from './context/StoreContext';
import { UserProvider } from './context/UserContext';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <StoreProvider>
          <Dashboard />
        </StoreProvider>
      </UserProvider>
    </div>
  );
}

export default App;
