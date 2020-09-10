import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './components/Hello';
import HelloStudent from './components/HelloStudent';




ReactDOM.render(
  <React.StrictMode>
    < Hello/>
    <HelloStudent name ="Tarun"/>
    <HelloStudent name ="Amr" unit ="HTML"/>
    <HelloStudent name ="Apoorva" unit ="CSS"/>
    
  </React.StrictMode>,
  document.getElementById('root')
);


