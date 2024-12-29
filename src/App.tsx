import React from 'react';
import './App.css';
import img from './assets/jhs.png'
const App: React.FC = () => {
  return (
    <div className="construction-container">
      <div className="construction-content">
        <img src={img} width={150} />
        <h1>🚀 Estamos construindo algo incrível!</h1>
        <p>
          Nosso site estará disponível em breve. Estamos dedicados a criar uma experiência única para você.
        </p>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <p className="footer-text">Agradecemos pela sua paciência! 🙌</p>
      </div>
    </div>
  );
};

export default App;
