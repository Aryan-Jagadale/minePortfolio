import { toast } from 'react-toastify';

const toastProperties={
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
}
export const addToast = (typeToast,message)=>{
    if(typeToast === true){
        toast.success(message,toastProperties)
    }else{
        toast.error(message,toastProperties)
    }
}