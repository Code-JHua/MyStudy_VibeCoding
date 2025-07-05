import { Card, Form } from 'antd';
import logo from '../../assets/学员.png';
import './index.css'
import { Input, Button, Checkbox, Flex } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    return (
        <div className='login'>
            <Card className="login-container">
                <img className='login-logo' src={logo} alt="" />

                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input prefix={<LockOutlined />} type="password" placeholder="密码" />
                    </Form.Item>
                    <Form.Item>
                        <Flex justify="space-between" align="center">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>
                            <a href="">忘记密码</a>
                        </Flex>
                    </Form.Item>

                    <Form.Item>
                        <Button block type="primary" htmlType="submit" onClick={() => navigate('/layout')}>
                            登录
                        </Button>
                        or <a href="">注册</a>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
export default Login
