class LocalStorageApi {
    static setItem(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static getItem(key) {
        const res = localStorage.getItem(key);
        return res && JSON.parse(res);
    }
};

export default LocalStorageApi;