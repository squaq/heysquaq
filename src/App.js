import React from 'react';
import Home from './views/home/Home';
import Bg from './components/bg/Bg';

import './App.scss';


function App() {
  return (
    <div className="App">
      <Bg>
        <Home/>
      </Bg>
    </div>
  );
}

export default App;
