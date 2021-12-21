
export const generateDate = () => {
    const dateM = new Date();

    return `${ dateM.getFullYear().toString().padStart(4, '0')}-${(dateM.getMonth()+1).toString().padStart(2, '0')}-${ dateM.getDate().toString().padStart(2, '0')} ${ dateM.getHours().toString().padStart(2, '0')}:${ dateM.getMinutes().toString().padStart(2, '0')}:${dateM.getSeconds().toString().padStart(2, '0')}`;
}