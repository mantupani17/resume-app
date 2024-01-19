import React from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import { AuthServices } from '../../services/auth';

export const Signin = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
        AuthServices.login(values).then((res)=>{
            window.localStorage.setItem('isAuthenticated', true)
            window.localStorage.setItem('token', res.token)
            window.location.href = '/'
        }).catch((err)=>{
            console.log(err)
        })
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const isAuthenticated = window.localStorage.getItem('isAuthenticated')
    if (isAuthenticated == 'true') {
        window.location.href = '/'
    }
    return (
    <Row justify="space-around" align="middle" className='login-form'>
        <Col span={12}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </Col>
    </Row>);
}
