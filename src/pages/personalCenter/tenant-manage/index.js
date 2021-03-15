import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Form, Input, DatePicker, Space, Table, Pagination,Row,Button} from 'antd';
import EditModal from './EditModal'
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
            <a onClick={() => handleEdit(record)}>查看</a>
            <a>删除</a>
          </Space>
      ),
    },
  ];
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [total, setTotal] = useState(null);
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [rowObj, setRowObj] = useState({});
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    let params = {
      page,
      size,
      name
    }
    queryList(params).then(res => {
      setData(res.data.content)
      setTotal(res.data.total)
    })
  }, [page,size,name]);

  const onChange = (page,size) => {
    setPage(page)
  }
  const onShowSizeChange = (page,size)=>{
    setPage(1)
    setSize(size)
  }
  const getSearch =(e)=>{
    setPage(1)
    setName(e.target.value)
  }
  // 新增
  const handleAdd = () =>{
    setVisible(true)
    setRowObj({})
    setDisabled(false)
  }
  // 编辑
  const handleEdit = (record) =>{
    setVisible(true)
    setRowObj(record)
    setDisabled(true)
  }
  const changeVisible = (bool) =>{
    setVisible(bool)
  }
  return (
      <div>
        <Form layout={'inline'} {...formItemLayout}>
          <Form.Item label="申请人" style={{width: '20%'}}>
            <Input placeholder="请输入" allowClear onChange={getSearch} />
          </Form.Item>
          <Form.Item label="创建时间">
            <Space direction="vertical" size={12}>
              <RangePicker/>
            </Space>,
          </Form.Item>
        </Form>
        <Row justify="end" style={{marginTop:'20px',marginBottom:'20px'}}>
          <Button type={'primary'} onClick={handleAdd}>新增</Button>
        </Row>
        <EditModal
            visible={visible}
            changeVisible={changeVisible}
            rowObj={rowObj}
            disabled={disabled}
        ></EditModal>
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
