class LocalStorageApi {
    static getData(key) {
        return JSON.parse(localStorage.getItem(key));
    }

    static setData(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}

export default LocalStorageApi;