import React from 'react';
import { Button, Form, Input, Row, Col } from 'antd';
import { AuthServices } from '../../services/auth';
export const Signup = () =>{
    
    const validateConfirmPassword = (_, value) => {
        const { password } = form.getFieldValue();
        if (value && value !== password) {
          return Promise.reject('Password and confirm password is not matching.');
        }
        return Promise.resolve();
    };

    const onFinish = (values) => {
        console.log('Success:', values);
        AuthServices.register(values).then((res)=>{
            console.log(res)
            window.location.href = '/sign-in'
        }).catch((er)=>{
            console.log(er)
        })
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };  
    
    const form = Form.useForm()[0];  
    return (
        <Row justify="space-around" align="middle" className='login-form'>
            <Col span={12}>
                <Form
                    form={form}
                    name="registration"
                    labelCol={{span: 8}}
                    wrapperCol={{ span: 16 }}
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
                        label="First Name"
                        name="firstname"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your firstname!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="lastname"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your lastname!',
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
                        label="Confirm Password"
                        name="confirmPassword"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            {
                                validator: validateConfirmPassword
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
    
                    <Form.Item wrapperCol={{offset: 8, span: 16 }} >
                        <Button type="primary" htmlType="submit">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
} 
