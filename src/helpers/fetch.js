const baseURL = 'http://172.20.1.36/apiMultitask/index.php';
const fetchFunction = (end, data, method = 'GET', token = '') => {

    if(method === 'GET'){
        return fetch(`${baseURL}/${end}`);
    }

    return fetch(`${baseURL}/${end}`,{
        method,
        headers: {
            'Content-type': 'application/json',
            'Authorization' : token
        },
        body: JSON.stringify(data)
    })

}



export {
    fetchFunction
}