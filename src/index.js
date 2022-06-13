import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();




// var React = require('react'); Instead of this line we can use 

// var ReactDOM = require("react-dom"); Instead of this line we can write below code because of babel compiler 

// ReactDOM.render( <h1>Hello World!!</h1>, document.getElementById("root") );

// ReactDOM.render( /*#__PURE__*/React.createElement("h1",
//  null, "Hello World!!"), document.getElementById("root"));


// All three methods are working perfect
// this below code is pure javascript code that display contents

// var h1 = document.createElement("h1");
// h1.innerHTML = "Nabin Technical";
// document.getElementById("root").appendChild(h1);




// this is show five best movie name

// ReactDOM.render(
//   <>
//   <h1> Nabin Technical Netflix pick most five movie</h1>
//   <p>List of 5 Best Movie Name is :</p>
//   <ol>
//     <li>Dilwale</li>
//     <li>Diljale</li>
//     <li>Phol Aur Kante</li>
//     <li>Hum App Ke Hai Kon</li>
//     <li>Sooryabansham</li>
//   </ol>

//   </>,
//   document.getElementById("root")
// )
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
const root = createRoot(document.getElementById('root'));
root.render(
 
  <>
<h1>My Name Is Navin Sah</h1>
<p>Current DAte is = {currentDate}</p>
<p>Current DAte is = {currentTime}</p>

</>

);


