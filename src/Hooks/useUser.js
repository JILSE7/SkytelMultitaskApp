import { useSelector } from "react-redux"

const useUser = () => {
    const {username, email, rol, imagen} = useSelector(state => state.auth.user);   
    return {
        username, 
        email,
        rol,
        imagen
    }
    
};

export default useUser;