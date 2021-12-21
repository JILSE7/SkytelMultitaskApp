import { useSelector } from "react-redux"

const useUser = () => {
    const {username, email, rol} = useSelector(state => state.auth.user);   
    return {
        username, 
        email,
        rol
    }
    
};

export default useUser;