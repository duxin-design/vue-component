import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Form, Icon, Input, Button, } from "antd";
import "./index.css";

const FormItem = Form.Item;

class LoginFrom extends Component {
    handleSubmit(e) {
        console.log(e)
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values)
            }
        })
        this.props.history.push("/home");
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form" id="login-form">
                {/* 用户名 */}
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: "请输入用户名" }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,0.25)" }} />} placeholder="用户名" />
                    )}
                </FormItem>
                {/* 密码 */}
                <FormItem>
                    {
                        getFieldDecorator('password', {
                            rules: [{ required: true, message: "请输入密码" }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,0.25)' }} />} type="password"
                                placeholder="密码" />
                        )
                    }
                </FormItem>
                {/* 复选框 */}
                <FormItem>
                    <span><NavLink to="/reset">忘记密码</NavLink></span>
                    <Button type="primary" htmlType="submit" className="login-form-button"
                        loading={this.isLogging ? true : false}>
                        {this.isLogging ? "Loading" : "登录"}
                    </Button>
                </FormItem>
            </Form>
        )
    }
}

const WrappedMormalLoginFrom = Form.create()(LoginFrom);
const loginState = ({ loginState }) => ({ toPath: loginState.toPath })

export default withRouter(connect(loginState)(WrappedMormalLoginFrom))