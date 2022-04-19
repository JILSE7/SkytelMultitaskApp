
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


const initialNewCustomer = {
	nombre: "",
	pin:"",
	ruteo: "",
	destino:"",
	copia:"",
	estado:"1"
}


export {
    initialMessage,
    initialMultitask,
    initialNewCustomer,
    initialNewUser,
    initialStateCustomers,
    initialStateLogin,
    initialStateUser,
    initialUpdateUser
}