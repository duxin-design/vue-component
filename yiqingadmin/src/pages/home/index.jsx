import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Layout, Modal, Icon } from 'antd';
import Content from "../../router";
import CreateMenuList from "../../component/menuList";
import "./index.css";

const { Header, Sider } = Layout;

class Home extends Component {
    logout() {
        const { dispatch } = this.props
        Modal.confirm({
            content: "确定要退出吗？",
            cancelText: "取消",
            okText: "确定",
            onOk: (values) => {
                console.log(values);
                this.props.history.push("/login");
                return new Promise((res, rej) => {
                    dispatch({
                        payload: values
                    })
                }).catch((e) => console.warn(e))
            }
        })
    }

    render() {
        return <Layout>
            <Header className="header">
                <span>新型冠状病毒感染肺炎医学观察监控平台</span>
                <span><span>管理员</span><Icon type="logout" onClick={this.logout.bind(this)} /></span>
            </Header>
            <Layout>
                <Sider width={200}>
                    <CreateMenuList />
                </Sider>
                <Layout><Content /></Layout>
            </Layout>
        </Layout>
    }
}

export default withRouter(Home)