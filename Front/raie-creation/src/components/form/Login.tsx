

import React from 'react'
import { Form,  Icon, Input, Button, Checkbox, Tooltip } from 'antd';

const Login: React.FC = (props:any) => {
    const { getFieldDecorator } = props.form;
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            
            }
        });
    };
    return(
        <div>
            Login form
            <Form onSubmit={handleSubmit}>
                <Form.Item
                    label={
                        <span>
                        mail
                        </span>
                    }
                >
                    {
                        getFieldDecorator('mail', {
                            rules: [{ required: true, message: 'Indiquez mail merci ', whitespace: true }],
                        })(<Input />)
                    }
                </Form.Item>
                <Form.Item label="Password" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                        {
                            required: true,
                            message: 'Indiquez votre mot de passe',
                        },
                        ],
                    })(<Input.Password />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Connexion
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Form.create({ name: 'login' })(Login);