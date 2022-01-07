import logo from '../../assets/cloud.png';

const Waiting = () => {
    return (
        <div className='container_wait flex items-center justify-center '>
            <img src={logo} alt='skytel'style={{width:"400px"}} className='animate__animated animate__zoomInDown '/>
        </div>
    )
}

export default Waiting
