import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ComponentStudy from './pages/ComponentStudy/ComponentStudy';

const root = ReactDOM.createRoot(document.getElementById('root'));

const props = { // props 대신 비구조 할당으로 {a,b}도 가능 -> 변수를 만들어서 바로 대입
  a: 10,
  b: 20
}

root.render(
  <ComponentStudy a={10} b={20}/>
  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
