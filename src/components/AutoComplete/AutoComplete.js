import React, { useState } from 'react'
import useCustomers from "../../Hooks/useCustomers";
import { Input, AutoComplete, Tag } from "antd";
const { Option } = AutoComplete;



const AutoCompleteUser = ({message,refInput}) => {
    const [result, setResult] = useState([]);
    const {customers = []} = useCustomers();
    

    const handleSearch = (value) => {
      //Capitalizacion de busqueda
      let searchCapi = '';
      if(value) searchCapi =  value[0].toUpperCase() +  value.slice(1);
      
      const resp = customers.filter(customer => customer.Nombre.includes(value) || customer.Nombre.includes(searchCapi)||customer.Pin.includes(value));
      setResult(resp)
      
    };
  
    const handlerSelect = (e) => {
      console.log(e);
      message.pin = e;
    }
  
    const keyDown = (e) => {
        /*   if(e.keyCode === 8){
              document.querySelector('#uid').value = ' ';
              obj.usuario = '';
          } */
    }
    return (
        <AutoComplete
        style={{
          width: '350px',
          height: 39,
          textAlign: 'center',
          justifyContent:'center',
          
        }}
        onSearch={handleSearch}
        placeholder="Buscar por pin o nombre de usuario"
        onSelect={handlerSelect}
        className="form-control"
        onKeyDown = {keyDown}
        id='uid'
        ref={refInput}
      >
          {result.map((customer) => (
          <Option  key={customer.key} value={customer.Pin} >
            <p>{customer.Nombre} <Tag color={(customer.Estado > 0) ? 'blue' : 'volcano'}>{customer.Pin}</Tag></p>  
            {/* <Tag color={(customer.Estado > 0) ? 'green' : 'volcano'} key={`${customer.Estado}`}>{customer.Estado === '0' ? "Inactivo" : "Activo"}</Tag> */}
          </Option>
        ))}
      </AutoComplete>
    )
}

export default AutoCompleteUser
