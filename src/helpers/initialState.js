
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
}


export {
    initialStateLogin,
    initialStateUser,
    initialStateCustomers,
    initialMessage,
    initialMultitask
}