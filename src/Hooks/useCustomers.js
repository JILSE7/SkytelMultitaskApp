import React from 'react'
import { useSelector } from 'react-redux'

const useCustomers = () => {
    const {users} = useSelector(state => state.customers);
    return {
        customers: users
    }
}

export default useCustomers
