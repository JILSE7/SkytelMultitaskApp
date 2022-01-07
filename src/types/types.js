export const types = {
    //Logs
    login                : '[log] Start session',
    logout               : '[log] End session',
    checkLog             : '[log] Check Session',

    //Customers
    getCustomers         : '[customers] - Get',
    setCustomers         : '[customers] - Set',
    getCustomerByPin     : '[customers] - GetByPin',
    deleteCustomers      : '[customers] - DeleteCustomers',

    //Message
    setMessage           : '[message] - set',
    sendMessage          : '[message] - send',
    setNewCountMessages  : '[message] - sent',

    //Users - Admin
    getUsers             : '[users] - get',
    setUsers             : '[users] - set',
    updateUser           : '[users] - update Data',
    updateUserPassword   : '[users] - update Password',
    deleteUser           : '[users] - delete',
    registerUser         : "[users] - NewUserRegistered",
    activeUser           : "[users] - ActiveUser",
    inactiveUser         : "[users] - InactiveUser" 

}