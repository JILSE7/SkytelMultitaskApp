export const userStoreVerify = (store = [], newUser) => {
    let verify;
    store.forEach(us => {
        if(us.Username === newUser.Username){
            verify = "El nombre de usuario ya existe";
            return;
        }else if(us.Email === newUser.Email){
            verify = "El correo ya esta registrado";
            return;
        }
    });

    if(verify){
        return verify
    }
    return false;
}