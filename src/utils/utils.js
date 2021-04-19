export const saveToLocalStorage = ( key,value ) => {
    return localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = ( key ) => {
    return localStorage.getItem(key);
}

export const removeFromLocalStorage = ( key ) => {
    return localStorage.removeItem(key);
}