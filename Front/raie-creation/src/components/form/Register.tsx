

import React from 'react'
import { Form,  Icon, Input, Button, Checkbox, Tooltip } from 'antd';
const Register: React.FC = (props:any) => {
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
            Register form
            <Form onSubmit={handleSubmit}>
                <Form.Item
                    label={
                        <span>
                        Nom
                        </span>
                    }
                >
                    {
                        getFieldDecorator('nom', {
                            rules: [{ required: true, message: 'Indiquez vote nom merci ', whitespace: true }],
                        })(<Input />)
                    }
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                        Prénom
                        </span>
                    }
                >
                    {
                        getFieldDecorator('prenom', {
                            rules: [{ required: true, message: 'Indiquez vote prénom merci ', whitespace: true }],
                        })(<Input />)
                    }
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            Mail
                        </span>
                    }
                >
                    {
                        getFieldDecorator('mail', {
                            rules: [
                                { 
                                    type: 'email',
                                    message: 'Email invalide '
                                },
                                { 
                                    required: true, 
                                    message: 'Indiquez vote mail merci ', 
                                    whitespace: true 
                                }],
                        })(<Input />)
                    }
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            Numéro de téléphone
                        </span>
                    }
                >
                    {
                        getFieldDecorator('phone', {
                            rules: [
                                { 
                                    required: true, 
                                    message: 'Indiquez vote numéro de téléphone merci ', 
                                    whitespace: true 
                                }],
                        })(<Input />)
                    }
                </Form.Item>



                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        S'inscire
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Form.create({ name: 'register' })(Register);