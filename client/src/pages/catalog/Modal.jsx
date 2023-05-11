import React from 'react';
import {Button, Form, Input} from "antd";

const Modal = () => {
  return (
    <div style={{
      padding: '40px',
      paddingTop: '60px',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      background: 'white',
      borderRadius: '25px',
      height: '150px',
      width: '60vw'
    }}>
      <Form.Item
        label="Приватный ключ"
        name="username"
        rules={[{required: true, message: 'Введите ваш приватный ключ'}]}
      >
        <Input.Password/>
      </Form.Item>
      <Button style={{
        marginBottom: '20px'
      }} type="default" htmlType="submit">
        Оплатить
      </Button>
    </div>
  );
};

export default Modal;
