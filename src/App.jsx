import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React,{useState} from 'react';
import Homepage from './homepage/homepage';
import UserAuth from './adminauth/adminAuth';
import AdminHomepage from './adminhomepage/adminHomepage';
import Shop from './shop/shop';
import UserSignUp from './adminauth/signupAuth';

function App() {
  localStorage.clear();
  const [username,setUserName] = useState("")

  const onLogin = (name)=>{
    setUserName(name);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Homepage username={username}/>} />
        <Route exact path="/admin" element={<UserAuth type = {{name : "admin"}}/>} onLogin={onLogin}/>
        <Route exact path="/userlogin" element={<UserAuth type = {{name : "user"}} onLogin={onLogin}/>} />
        <Route exact path="/adminpage" element={<AdminHomepage />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/usersignup" element={<UserSignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;