import useUser from '../Hooks/useUser';

const Profile = () => {
    const user = useUser();
    return (
        <div className='container_profile'>
            
          
            <div className='container_profile_photo flex justify-center items-center'>
                <img className="w-full" src={user.imagen} alt='userImage' />
            </div>
           <div className='container_profile_info flex flex-col items-start justify-evenly'>

                    <h5>Username: <span>{user.username}</span></h5>
                    <h5>Email: <span>{user.email}</span></h5>
                    <h5>Estatus: <span className={(user.estatus !== "1")? "":"inactivo"}>{(user.estatus !== "1")? "Activo": "Inactivo"}</span></h5>
    
           </div>
        </div>
    )
}

export default Profile
