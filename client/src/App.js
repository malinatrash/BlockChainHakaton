import './App.css';
import {Navigate, Route, Routes} from "react-router";
import React from "react";
import Auth from "./pages/auth/Auth";
import SignUp from "./pages/auth/modules/SignUp";
import SignIn from "./pages/auth/modules/SignIn";
import {NavLink} from "react-router-dom";
import HeaderItem from "./components/HeaderItem";
import Catalog from "./pages/catalog/Catalog";

const App = () => (
  <div className="App">
    <Routes>
      <Route path={'/signup'} element={<SignUp/>}/>
      <Route path={'/signin'} element={<SignIn/>}/>
      <Route path={'/catalog'} element={<Catalog/>}/>
      <Route path={'/'} element={<Navigate to={'signin'}/>}/>
    </Routes>
  </div>
);

export default App;
