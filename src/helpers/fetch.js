const baseURL = 'https://apisky.infosite.com.mx/index.php';
//const baseURL = 'http://172.20.1.36/apiSkytel/index.php';
const fetchFunction = (end, data, method = 'GET', token = '') => {

    if(method === 'GET'){
        return fetch(`${baseURL}/${end}`);
    }

    return fetch(`${baseURL}/${end}`,{
        method,
        headers: {
            'Content-type': 'application/json',
            'token' : token
        },
        body: JSON.stringify(data)
    })

}


//Upload Cloudaniry
const uploadPhoto = async(file)=>{
    const cloudinary = "https://api.cloudinary.com/v1_1/dl7ztndki/upload";
 
    //Es como el body que lleva la peticion
    const formData = new FormData();
    formData.append('upload_preset','skytel');
    formData.append('file', file);

    try {
        const respuesta = await (await fetch(cloudinary, {
            method: "POST",
            body: formData
        })).json()

        return respuesta.secure_url

    } catch (error) {
        throw error;
    }

}

export {
    fetchFunction,
    uploadPhoto
}