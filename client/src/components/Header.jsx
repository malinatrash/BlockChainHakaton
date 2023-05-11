import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import HeaderItem from "./HeaderItem";
import {StateManager} from "../StateManager";

const Header = () => {
  const [price, setPrice] = useState(StateManager.shared.totalPrice);
  useEffect(() => {
    setPrice(StateManager.shared.totalPrice)
  }, [StateManager.shared.totalPrice]);
  return (
    <header>
      <NavLink to={'/catalog'}>
        <img
          style={{width: '300px'}}
          src={'/img.png'}
          alt={'продалитъ'}
        />
      </NavLink>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: '70px'
      }}>
        <NavLink to={'/store'}>
          <HeaderItem text={`Оплата: ${price}ETH`}/>
        </NavLink>
        <NavLink to={'/profile'}>
          <HeaderItem text={"Профиль"}/>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
