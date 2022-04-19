import { toast } from "react-toastify";

export const toastMessage = (message, state = false, position = "top-right") => {
    
    return  state ? (
        toast.success(` ${message}`, {
            position,
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            
            })

    ) : toast.error(` ${message}`, {
        position,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    
};



export const toastInfo = (msg) => {
    return toast.info(msg, {
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