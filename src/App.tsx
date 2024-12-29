import React from 'react';
import './App.css';
import img from './assets/jhs.png'

const App: React.FC = () => {
  return (
    <div className='content'>
      <img src={img} width={200} />
      <div className="construction-container">
        <div className="construction-content">
          <h1>🚧 Site em Construção 🚧</h1>
          <p>Estamos trabalhando duro para trazer uma experiência incrível para você.</p>
          <p>Volte em breve!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
