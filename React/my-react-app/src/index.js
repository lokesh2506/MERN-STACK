import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


// import Com from './components/comm';
// Learning components

// function Garage(){
//   return(
//     <div classs="new">
//       <h1>New Div</h1>
//       <App/>
//     </div>
//   ); 
// }

// without a div also we can declare a elemnet inside the return

// function Goods(){
//   return(
//     <>
//       <h1>New Div</h1>
//       <Garage/>
//     </>
//   );
// }

//-------------class Components-----------

// import a function from another folder js class

// import Com from './components/com';

// import Garage from './components/Garage';
// import Header from './components/Header';
import UseStates from './components/FavoriteColor';
import Car from './components/Car'
import Scotter from './components/Scotter';
import List from './components/List';
import Timer from './components/USEEffect';


//-------------------props---------------------

// we can sent a props(properties-> Data) in the components is known as props








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Garage/> */}
   {/* <App/> */}
   {/* <Header/> */}
  <Car/>
  <UseStates/>
  <List/>
  <Timer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
