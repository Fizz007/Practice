import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Userauth from './Userauth';
import Context from './State/Context';
import Appp from './Memo/Appp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Context>
    <App />
{/* <Appp/> */}
    </Context>
  </React.StrictMode>
);


