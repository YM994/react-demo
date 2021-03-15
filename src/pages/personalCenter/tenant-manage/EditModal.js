import React, {useState} from 'react';
import { Modal, Button } from 'antd';
const EditModal = (props) => {
  const { visible, changeVisible,rowObj,disabled } = props;
  console.log(rowObj,disabled)
  const handleOk = () =>{
    changeVisible(false);
  }
  const handleCancel = () =>{
    changeVisible(false);
  }
  return (
      <div>
        <Modal title={disabled?'编辑租户':'创建租户'} visible={visible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
  );
};

export default EditModal;
