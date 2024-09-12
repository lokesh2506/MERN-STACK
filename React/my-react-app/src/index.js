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
import App from './App';
// import Garage from './components/Garage';
// import Header from './components/Header';
import UseStates from './components/FavoriteColor';
import Car from './components/Car'
import Scotter from './components/Scotter';
import List from './components/List';
import Timer from './components/USEEffect';
// import App from './To-Do App/App';
import MyForm from './components/formSubmission';
// import App  from './react-router/App';
// import App from './CRUD/CrudApp'
import { LazyHook } from './Hooks/LazyHook';
import { CleanUpHook } from './Hooks/CleanUpFunction';
import { USEREF } from './Hooks/UseRefHook';
import { UseMemoHook } from './Hooks/MemoHook';
import { CallBAckFun } from './Hooks/callBackHook';
import ContextProvider from './Hooks/contextFolder/AppContext';
import { Footer } from './Hooks/contextFolder/footer';
import { Counter } from './Hooks/UseReducer';
import AppApi from './components/Axios/AppApi';
//-------------------props---------------------

// we can sent a props(properties-> Data) in the components is known as props








const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
      {/* <Garage/> */}
      {/* <App/> */}
      {/* <Header/> */}
      {/* <Car/>
      <UseStates/>
      <List/>
      <Timer/> */}
      {/* <MyForm/> */}
      {/* <App/> */}

      {/* <App/> */}
      {/* <LazyHook/> */}
      {/* <CleanUpHook/> */}
      {/* <USEREF/> */}
      {/* <UseMemoHook/> */}

      {/* <CallBAckFun/> */}

        {/* <ContextProvider>
          <Footer/>
        </ContextProvider> */}

        {/* <Counter/> */}

        {/* <App/> */}
        {/* <App/> */}
        <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
