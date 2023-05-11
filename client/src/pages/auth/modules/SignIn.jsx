import React from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import './sign.css'

const SignIn = () => {

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={'view'}>
      <div className={'sign-form'}>
        <h1>Авторизация</h1>
        <Form
          name="basic"
          labelCol={{span: 8}}
          wrapperCol={{span: 16}}
          style={{maxWidth: 600}}
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="ОГРН"
            name="username"
            rules={[{required: true, message: 'Введите ваш ОГРН'}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[{required: true, message: 'Введите ваш пароль'}]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type="primary" htmlType="submit">
              Продтвердить
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
