import React from 'react';
import './App.css';
import LeftPanelSection from './components/LeftPanel/LeftPanelSection';
import RightPanelSection from './components/RightPanel/RightPanelSection';

function App() {
  return (
    <div className="App">
      <div className="grid grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="md:col-span-1 h-full">
          <LeftPanelSection />
        </div>
        <div className="md:col-span-1 md:p-4 h-full justify-self-center self-center">
          <RightPanelSection />
        </div>
    </div>
    </div>
  );
}

export default App;
