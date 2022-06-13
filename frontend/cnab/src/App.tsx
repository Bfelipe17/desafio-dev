import React from 'react';
import './App.css';
import { ModalProvider } from './context/ModalContext';
import { StoreProvider } from './context/StoreContext';
import { UserProvider } from './context/UserContext';
import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ModalProvider>
          <StoreProvider>
            <Dashboard />
          </StoreProvider>
        </ModalProvider>
      </UserProvider>
    </div>
  );
}

export default App;
