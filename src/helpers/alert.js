import Swal from "sweetalert2";


const badLoginAlert = () => {
    return Swal.fire({
        title: 'Error!',
        text: 'Porfavór Verifique Sus Credenciales ',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
};


export {
    badLoginAlert
}