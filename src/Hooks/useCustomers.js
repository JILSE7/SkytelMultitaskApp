import React from 'react'
import { useSelector } from 'react-redux'

const useCustomers = () => {
    const {users} = useSelector(state => state.customers);
    console.log(users);


    return {
        customers: users
    }
}

export default useCustomers
