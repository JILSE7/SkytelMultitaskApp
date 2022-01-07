import { Modal } from 'antd';

const ModalComponent = ({isModalVisible, handleOk, handleCancel, children}) => {
   
  
    return (
      <>
      
        <Modal 
            title="SkyTel - Mi Perfil" 
            onOk={handleOk} 
            onCancel={handleCancel}
            visible={isModalVisible} 
            width={"60vw"}
            >
          
          {children}
          
        </Modal>
      </>
    );
}

export default ModalComponent
