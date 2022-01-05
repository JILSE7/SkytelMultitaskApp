
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
    users: []
};

const initialNewUser = {
    Username: "",
    Email: "",
    Password: "",
    Confirm:"",
    Rol: "",
    Estado: ""
}


export {
    initialStateLogin,
    initialStateUser,
    initialStateCustomers,
    initialMessage,
    initialMultitask,
    initialNewUser
}