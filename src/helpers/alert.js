import Swal from "sweetalert2";


const badLoginAlert = () => {
    return Swal.fire({
        title: 'Error!',
        text: 'Porfavór Verifique Sus Credenciales ',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
};


const lockAlert = async(nombre,pin, lock = true) => {

    
    
    const isConfirmed  = await Swal.fire({
            title:(lock) ?  `¿Estás seguro de suspender el servicio de de ${nombre} - ${pin} ` : `¿Estás seguro de reactivar el servicio de ${nombre} - ${pin}`,
            showCancelButton: true, 
            confirmButtonColor: '#198754', 
            cancelButtonColor: '#d33', 
            confirmButtonText:(lock) ?  'Suspender': 'Reactivar',cancelButtonText: '!No, Espera¡',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    
    return isConfirmed;
}


export {
    badLoginAlert,
    lockAlert
}