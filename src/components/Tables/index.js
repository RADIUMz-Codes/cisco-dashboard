import React, { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";
import './index.css'

const columns = [
    {
        title: "Assessment Name",
        dataIndex: "assessment_name",
    },
    {
        title: "Product Team",
        dataIndex: "product_team",
        filters: [
            {
                text: "Team A",
                value: "Team A",
            },
            {
                text: "Team B",
                value: "Team B",
            },
            {
                text: "Team C",
                value: "Team C",
            },
            {
                text: "Team D",
                value: "Team D",
            },
            {
                text: "Team E",
                value: "Team E",
            },
        ],
        onFilter: (value, record) => record.product_team.indexOf(value) === 0,
    },
    {
        title: "Control Name",
        dataIndex: "control_name",
        filters: [
            {
                text: "Type 1 Control",
                value: "Type 1 Control",
            },
            {
                text: "Type 2 Control",
                value: "Type 2 Control",
            },
            {
                text: "Type 3 Control",
                value: "Type 3 Control",
            },
            {
                text: "Type 4 Control",
                value: "Type 4 Control",
            },
            {
                text: "Type 5 Control",
                value: "Type 5 Control",
            },
        ],
        onFilter: (value, record) => record.control_name.indexOf(value) === 0,
    },
    {
        title: "Control Domain",
        dataIndex: "control_domain",
        filters: [
            {
                text: "Type 1 Domain",
                value: "Type 1 Domain",
            },
            {
                text: "Type 2 Domain",
                value: "Type 2 Domain",
            },
            {
                text: "Type 3 Domain",
                value: "Type 3 Domain",
            },
            {
                text: "Type 4 Domain",
                value: "Type 4 Domain",
            },
            {
                text: "Type 5 Domain",
                value: "Type 5 Domain",
            },
        ],
        onFilter: (value, record) => record.control_domain.indexOf(value) === 0,
    },
    {
        title: "Jira Ticket Id",
        dataIndex: "jira_ticket_id",
    },
    {
        title: "Jira Ticket Status",
        dataIndex: "jira_ticket_status",
    },
];

function Tables() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("/data.json")
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const onChange = (pagination, filters, sorter, extra) => {
        console.log("params", pagination, filters, sorter, extra);
    };
    return (
        <>
            <div className="table-wrapper">
                <Table
                    columns={columns}
                    dataSource={data}
                    onChange={onChange}
                    pagination={{
                        pageSize: 5,
                    }}
                />
            </div>
        </>
    );
}

export default Tables;
