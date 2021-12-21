import { toast } from "react-toastify";

export const toastMessage = (message, state = false) => {
    
    return  state ? (
        toast.success(`🦄 ${message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
            })

    ) : toast.error(`🦄 ${message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    
};



export const toastInfo = () => {
    return toast.info('Enviando Mensaje', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme:"colored"
        });
}