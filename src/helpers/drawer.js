import { Tooltip } from "antd";

const renderIconWToolTip = (Icon, tooltip) => {

    return <Tooltip title={tooltip}>
              <p className='flex justify-center items-center'> 
                <Icon size={"2em"}/>
                </p>
            </Tooltip>
};



export {
    renderIconWToolTip
}