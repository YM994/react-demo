import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Form, Input, DatePicker, Space, Table, Pagination,Row} from 'antd';

const {RangePicker} = DatePicker;

async function queryList(params) {
  const {page, size, ...data} = params
  const response = await axios.post(`/api/tenant/search?page=${page}&size=${size}`, data)
  return response
}

function Index(props) {
  const formItemLayout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
  }
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [total, setTotal] = useState(null);
  useEffect(() => {
    let params = {
      page,
      size
    }
    queryList(params).then(res => {
      setData(res.data.content)
      setTotal(res.data.total)
    })
  }, [page,size]);

  console.log(data)
  const columns = [
    {
      title: '租户名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '容量状态',
      dataIndex: 'quotaColor',
      key: 'quotaColor',
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '申请人',
      key: 'createUserName',
      dataIndex: 'createUserName',
    },
    {
      title: '创建时间',
      key: 'createTime',
      dataIndex: 'createTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
          <Space size="middle">
            <a>查看</a>
            <a>删除</a>
          </Space>
      ),
    },
  ];
  const onChange = (page,size) => {
    setPage(page)
  }
  const onShowSizeChange = (page,size)=>{
    setPage(1)
    setSize(size)
  }

  return (
      <div>
        <Form layout={'inline'} {...formItemLayout}>
          <Form.Item label="申请人" style={{width: '20%'}}>
            <Input placeholder="请输入"/>
          </Form.Item>
          <Form.Item label="创建时间">
            <Space direction="vertical" size={12}>
              <RangePicker/>
            </Space>,
          </Form.Item>
        </Form>
        <Table
            columns={columns}
            dataSource={data}
            rowKey={record => record.id}
            pagination={false}></Table>
        <Row justify="end" style={{marginTop:'20px'}}>
          <Pagination
              showSizeChanger
              showQuickJumper
              showTotal={(total, range) => `共 ${total} 页`}
              defaultCurrent={1}
              total={total}
              onChange={onChange}
              onShowSizeChange={onShowSizeChange}/>
        </Row>
      </div>
  );
}

export default Index;
