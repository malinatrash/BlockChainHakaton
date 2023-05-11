import React, {useState} from 'react';
import {Button} from "antd";
import {StateManager} from "../../StateManager";
import {render} from "react-dom";

const BookItem = ({e}) => {
  const [amount, setAmount] = useState(0);
  return (
    <div className={'book-item'} key={e.id}>
      <img src={e.image} alt={e.title} style={{width: '200px'}}/>
      <p>{e.title}</p>
      <p>{e.description}</p>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5px',
        paddingTop: '15px',
        width: '130px',
        background: 'white',
        border: '2px solid black',
        borderRadius: '15px',
        marginBottom: '10px'
      }}>
        <p>Цена: <strong>{e.price}ETH</strong></p>
      </div>
      <span>{amount}</span>
      <div>
        <Button type="default" htmlType="submit" onClick={() => {
          StateManager.shared.totalPrice += e.price
          setAmount(amount + 1)
        }}>
          +
        </Button>
        <Button type="default" htmlType="submit" onClick={() => {
          StateManager.shared.totalPrice -= e.price
          setAmount(amount - 1)
        }}>
          -
        </Button>
      </div>
    </div>
  );
};

export default BookItem;
