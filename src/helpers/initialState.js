
const initialStateLogin = {
    Username : '',
    Password: ''
}

const initialStateUser = {
    login: false,
    user: {},
    countMessage:{}
}

const initialStateCustomers = {
    users: [],
    userHistoric: []
}

const initialMessage = {
    pin : "",
    cu: "",
    msg: "",
    date: "",
    user: ""
};


const initialMultitask = {
    users: [],
    active: false,
    activeUser:{}
};

const initialNewUser = {
    Username: "",
    Email: "",
    Password: "",
    Confirm:"",
    Rol: "",
    Estado: ""
}

const initialUpdateUser = {
    Username: "",
    Email: "",
    Rol: "",
    Estado: "",
    Imagen: ""
}


export {
    initialStateLogin,
    initialStateUser,
    initialStateCustomers,
    initialMessage,
    initialMultitask,
    initialNewUser,
    initialUpdateUser
    
}