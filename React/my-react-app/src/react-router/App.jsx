import React from "react";
import {BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import {Home} from "./Home.js"
import { About } from "./About.jsx";
import { User } from "./User.jsx";
import { BookOne } from "./BookOne.jsx";
import {BookTwo} from "./BookTwo.jsx"
import { LogIn } from "./LogIn.jsx";
import { Dashboard } from "./DashBoard.jsx";


function App() {
    return (
      <div>
       <BrowserRouter>
       <ul>
            <li><Link to="/">Home</Link></li> 
           <li> <Link to="/about">About</Link> </li> 
           <li><Link to="/user/1">User 1</Link></li> 
           <li><Link to="/user/2">User 2</Link></li> 
           <li><Link to="/book/one">Book1</Link></li> 
           <li><Link to="/book/two">Book2</Link></li> 
           <li> <Link to="/login">LogIn</Link> </li> 

    
       </ul>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/user/:id" element={<User/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/book">
                <Route path="one" element={<BookOne/>}/>
                <Route path="two" element={<BookTwo/>}/>
            </Route>
       </Routes>
       
       </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  