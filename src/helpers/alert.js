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
};


const changePasswordAlert = async() => {
  const { value: password } = await Swal.fire({
    title: 'Ingrese la nueva contraseña',
    input: 'password',
    inputLabel: 'Pida al usuario que ingrese su nueva contraseña',
    inputPlaceholder: 'Nueva contraseña',
    inputAttributes: {
      maxlength: 10,
      autocapitalize: 'off',
      autocorrect: 'off'
    }
  })
  
  if (password) {
    const confirm = await Swal.fire({
        title: `Entered password: ${password}`,
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Actualizar',
        denyButtonText: `Cancelar`,
      });

      if(confirm.isConfirmed) return password;
  }
};


const saveAction = (msg) =>{
  return Swal.fire(`Excelente, ${msg}`, '', 'success')
}


const selectPicture = async(setFileState) => {
  const { value: file } = await Swal.fire({
    title: 'Selecciona tu foto',
    input: 'file',
    inputAttributes: {
      'accept': 'image/*',
      'aria-label': 'Selecciona tu foto'
    }
  });
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      Swal.fire({
        title: '¿Esta sera tu foto de perfil?',
        imageUrl: e.target.result,
        imageAlt: 'The uploaded picture'
      }).then(({isConfirmed}) => {
          if(isConfirmed) setFileState(file);
      })
    }
    reader.readAsDataURL(file)
  }
}


export {
    badLoginAlert,
    changePasswordAlert,
    saveAction,
    lockAlert,
    selectPicture
}