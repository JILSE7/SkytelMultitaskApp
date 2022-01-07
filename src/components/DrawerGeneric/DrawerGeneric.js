import { Drawer } from "antd"
import EditFormUser from "../EditFormUser"


const DrawerGeneric = ({drawer, onClose, user}) => {
    return (
        <Drawer
        title={`Editar`}
        placement={'left'}
        closable={true}
        onClose={onClose}
        visible={drawer.visible}
        key={drawer.placement}
        width={"800"}
      >
        <EditFormUser drawer={drawer}/>
    
      </Drawer>
    )
}

export default DrawerGeneric
