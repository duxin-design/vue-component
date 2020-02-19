import React, { Component } from "react";
import { Layout, Table, Form, Row, Col, Button, DatePicker, Select, Input } from "antd"
import "./index.css";
const { Content } = Layout;
const { Option } = Select;
class SelfReport extends Component {
    constructor() {
        super()
        this.state = {
            columns: [{
                title: "序号",
                dataIndex: "id",
            }, {
                title: "涉事人姓名",
                dataIndex: "name"
            }, {
                title: "性别",
                dataIndex: "gender"
            },
            {
                title: "联系电话",
                dataIndex: "phone"
            },
            {
                title: "目前所在地",
                dataIndex: "nowAddress"
            }, {
                title: "近期旅居史",
                dataIndex: "lived"
            }, {
                title: "接触史",
                dataIndex: "touch"
            }, {
                title: "健康现状",
                dataIndex: "healthstatus"
            }, {
                title: "症状",
                dataIndex: "symptoms"
            }
            ],
            dataSource: [{ id: 1, symptoms: "咳嗽", healthstatus: "良好", touch: "无接触", lived: "经过武汉", nowAddress: "贵阳市观山湖区", phone: "110", gender: "男", name: "去你的" }
            ]
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const paginationProps = {
            showSizeChanger: false,
            showQuickJumper: false,
            showTotal: () => `共10条`,
            pageSize: 10,
            current: 10,
            total: 10,
            onChange: (current) => this.changePage(current),
        }

        return <div className="self">
            <h2>自查上报</h2>
            <Content className="search-content">
                <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
                    <Row>
                        <div className="search">
                            <Form.Item label="上报时间">
                                {getFieldDecorator('date', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择时间',
                                        },
                                    ],
                                })(<DatePicker format="YYYY-MM-DD h:mm:ss " placeholder="选择时间" />)}

                            </Form.Item>
                            <Form.Item label="涉事人姓名">
                                {getFieldDecorator(`page`, {
                                    rules: [
                                        {
                                            required: true,
                                            message: '输入页数',
                                        },
                                    ],
                                })(<Input />)}
                            </Form.Item>
                            <Form.Item label="性别">
                                {getFieldDecorator(`plotCode`, {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择性别',
                                        },
                                    ],
                                })(<Select placeholder="请选择性别">
                                    {
                                        // this.state.plotarr.map((item, key) => (<Option key={key} value={item.plotCode}>{item.plotName}</Option>))
                                    }
                                </Select>)}
                            </Form.Item>
                            <Form.Item label="联系电话">
                                {getFieldDecorator(`size`, {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入电话',
                                        },
                                    ],
                                })(<Input placeholder="联系电话" />)}
                            </Form.Item>


                        </div>
                    </Row>
                    <Row>
                        <div className="search">
                            <Form.Item label="目前所在地">
                                {getFieldDecorator('date', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择目前所在地',
                                        },
                                    ],
                                })(<Select placeholder="请选择目前所在地">
                                    {
                                        // this.state.plotarr.map((item, key) => (<Option key={key} value={item.plotCode}>{item.plotName}</Option>))
                                    }
                                </Select>)}

                            </Form.Item>

                            <Form.Item label="近期旅居史">
                                {getFieldDecorator(`page`, {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择近期旅居史',
                                        },
                                    ],
                                })(<Select placeholder="请选择近期旅居史">
                                    {
                                        // this.state.plotarr.map((item, key) => (<Option key={key} value={item.plotCode}>{item.plotName}</Option>))
                                    }
                                </Select>)}
                            </Form.Item>
                            <Form.Item label="接触史">
                                {getFieldDecorator(`plotCode`, {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择接触史',
                                        },
                                    ],
                                })(<Select placeholder="请选择接接触史">
                                    {
                                        // this.state.plotarr.map((item, key) => (<Option key={key} value={item.plotCode}>{item.plotName}</Option>))
                                    }
                                </Select>)}
                            </Form.Item>
                            <Form.Item label="健康现状">
                                {getFieldDecorator(`size`, {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择健康现状',
                                        },
                                    ],
                                })(<Select placeholder="请选择健康现状">
                                    {
                                        // this.state.plotarr.map((item, key) => (<Option key={key} value={item.plotCode}>{item.plotName}</Option>))
                                    }
                                </Select>)}
                            </Form.Item>
                        </div>
                    </Row>
                    <Row>
                        <div className="search">
                            <Form.Item label="症状">
                                {getFieldDecorator('date', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请选择症状',
                                        },
                                    ],
                                })(<Select placeholder="请选择症状">
                                    {
                                        // this.state.plotarr.map((item, key) => (<Option key={key} value={item.plotCode}>{item.plotName}</Option>))
                                    }
                                </Select>)}

                            </Form.Item>

                        </div>
                    </Row>
                    <Row>
                        <Col span={24} style={{ textAlign: 'right' }}>
                            <Button type="primary" htmlType="submit">查询</Button>
                            <Button type="primary" htmlType="submit" style={{ marginLeft: "25px" }}>重置</Button>
                        </Col>
                    </Row>
                </Form>
                <div className="search-result-list">
                    <Table
                        columns={this.state.columns}
                        dataSource={this.state.dataSource}
                        // rowKey={i => i.userId}
                        pagination={paginationProps} />

                </div>
            </Content>
        </div>
    }
}

const WrappedAdvancedSearchForm = Form.create({ name: 'self_search' })(SelfReport);

export default WrappedAdvancedSearchForm