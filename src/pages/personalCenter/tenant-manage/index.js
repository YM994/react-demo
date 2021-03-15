import React from 'react';
import axios from 'axios'
import { Form, Input,Col,Row,DatePicker, Space   } from 'antd';
const { RangePicker } = DatePicker;
function Index(props) {
    const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    }
    axios.get('/api/tenant/page-tenant').then(res=>{
        console.log(res)
    })
    return (
        <div>
            <Form layout={'inline'} {...formItemLayout}>
                <Form.Item label="申请人" style={{width:'20%'}}>
                    <Input placeholder="请输入" />
                </Form.Item>
                <Form.Item label="创建时间">
                    <Space direction="vertical" size={12}>
                        <RangePicker />
                    </Space>,
                </Form.Item>
            </Form>
        </div>
    );
}

export default Index;
