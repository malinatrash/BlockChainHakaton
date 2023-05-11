import React, {useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import {NavLink} from "react-router-dom";
import {StateManager} from "../../../StateManager";

const SignUp = () => {

  const [login, setLogin] = useState();
  const [ogrn, setOgrn] = useState();
  const [password, setPassword] = useState();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [isFiz, setIsFiz] = useState(false);
  ;
  return (
    <div className={'view'}>
      <div className={'sign-form'}>
        <h1>Регистрация</h1>
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
          {
            !isFiz
              ?
              <div>
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
              </div>
              :
              <div>
                <Form.Item
                  label="Логин"
                  name="username"
                  rules={[{required: true, message: 'Введите ваш логин'}]}
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
              </div>
          }

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
            <Checkbox onChange={() => setIsFiz(!isFiz)} value={isFiz}>Я юридическое лицо</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <NavLink to={'/catalog'}>
              <Button type="primary" htmlType="submit" >
                Зарегистрироваться
              </Button>
            </NavLink>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
