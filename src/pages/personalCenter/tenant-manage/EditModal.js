import React, {useState} from 'react';
import { Modal, Button } from 'antd';
const EditModal = (props) => {
  const { visible, changeVisible } = props;
  const handleOk = () =>{
    changeVisible(false);
  }
  const handleCancel = () =>{
    changeVisible(false);
  }
  return (
      <div>
        <Modal title="Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
  );
};

export default EditModal;
