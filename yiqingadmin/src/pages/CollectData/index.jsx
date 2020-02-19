import React, { Component } from "react";
import { Table } from "antd"

class Data extends Component {
    render() {
        const dataSource = [
            {
                name: "徐乐",
                cardId: "847668y7659875",
                heartRate: "61",
                temperature: "36.5",
                address: "贵州省铜仁市碧江区大江南路15号农村商业银行（大寨路分社）西114米",
                longitude: "109.1953302",
                latitude: "27.7132676",
                addTime: "2020-02-15 17:17:20"
            }
        ];

        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
            },
            {
                title: '身份证号',
                dataIndex: 'cardId',
            },
            {
                title: '心率',
                dataIndex: 'heartRate',
            },
            {
                title: '体温',
                dataIndex: 'temperature',
            },
            {
                title: '地址',
                dataIndex: 'address',
            },
            {
                title: '经度',
                dataIndex: 'longitude',
            },
            {
                title: '纬度',
                dataIndex: 'latitude',
            },
            {
                title: '录入时间',
                dataIndex: 'addTime',
            },
        ];
        return <Table dataSource={dataSource} columns={columns} />
    }
}

export default Data