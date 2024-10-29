export const setSessionStorage = (key: string, value: string) => {
    sessionStorage.setItem(key, value);
};

export const getSessionStorage = (key: string) => {
    return sessionStorage.getItem(key);
};

export const setSessionStorageObject = (key: string, value: Object) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSessionStorageObject = (key: string) => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};
