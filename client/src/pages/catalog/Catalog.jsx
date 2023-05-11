import React, {useEffect, useState} from 'react';
import Header from "../../components/Header";
import BookCatalog from "./BookCatalog";
import {StateManager} from "../../StateManager";
import {NavLink} from "react-router-dom";
import HeaderItem from "../../components/HeaderItem";
import Modal from "./Modal";

const Catalog = () => {
  const [price, setPrice] = useState(StateManager.shared.totalPrice)
  const [modalHidden, setModalHidden] = useState(true);
  useEffect(() => {
    setPrice(StateManager.shared.totalPrice)
  }, [StateManager.shared.totalPrice]);
  return (
    <div className={'catalog'}>
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
          <div onClick={() => {
            setModalHidden(!modalHidden)
          }}>
            <HeaderItem text={`Оплата: ${price}ETH`}/>
          </div>
          <NavLink to={'/profile'}>
            <HeaderItem text={"Профиль"}/>
          </NavLink>
        </div>
      </header>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        {!modalHidden
          ? <Modal/>
          : <></>
        }
      </div>
      <BookCatalog/>
    </div>
  );
};

export default Catalog;
