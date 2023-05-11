import React from 'react';
import Logo from './components/imgs/logo.png';
import Global from './components/global';

function App() {
  return (
    <div className="App">

      <header className="App-header">
          <img src={Logo} id='logo'/>
          <p>Video</p>
          <p>Categoria</p>
          <button id='btncategoria'>Nova Categoria</button>
      </header>
      <global/>

    </div>
  );
}



export default App;
