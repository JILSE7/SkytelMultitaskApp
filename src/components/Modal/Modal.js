import { Modal } from 'antd';
import React, { useState } from 'react'

const ModalComponent = ({isModalVisible, handleOk, handleCancel, children}) => {
   
  
    return (
      <>
      
        <Modal 
            title="Basic Modal" 
            onOk={handleOk} 
            onCancel={handleCancel}
            visible={isModalVisible} 
            width={"100vw"}
            >
          
          {children}
          
        </Modal>
      </>
    );
}

export default ModalComponent
