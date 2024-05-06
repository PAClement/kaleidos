export default class LocalService {
    static setItem(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    static getItem(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }

    static removeItem(key) {
        localStorage.removeItem(key);
    }

    static cleanStorage() {
        localStorage.clear();
    }
}