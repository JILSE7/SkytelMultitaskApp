import useUser from '../Hooks/useUser';
import userPhoto from '../assets/use1.jpg';

const Profile = () => {
    const user = useUser();
    console.log(user);
    return (
        <div className='container_profile'>
            
          
            <div className='container_profile_photo flex justify-center items-center'>
                <img className="w-full" src={userPhoto} alt='userImage' />
            </div>
           <div className='container_profile_info flex flex-col items-start justify-evenly'>
                
                    <h5>Nombre <span>Said Mandujano</span></h5>
                    <h5>Username <span>Said Mandujano</span></h5>
                    <h5>Estatus <span>Said Mandujano</span></h5>
                    <h5>Email <span>Said Mandujano</span></h5>
                
           </div>

          
               
          
            
        </div>
    )
}

export default Profile
