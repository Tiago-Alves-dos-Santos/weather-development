let DATABASE = {
    setChoose: (choose) => {
        sessionStorage.setItem('choose', choose);
    },
    getChoose: () => {
        let choose = sessionStorage.getItem('choose');
        return choose ? choose : '';
    },
    setWoeid: (code) => {
        DATABASE.setChoose('Código WOEID');
        sessionStorage.setItem('woeid', code)
    },
    getwoeid: () => {
        return {
            'choose': DATABASE.getChoose(),
            'woeid': sessionStorage.getItem('woeid')
        }
    },
    setGeoLocation: (latitude, longitude) => {
        DATABASE.setChoose('Geolocalização');
        sessionStorage.setItem('latitude', latitude);
        sessionStorage.setItem('longitude', longitude);
    },
    getGeoLocation: () => {
        return {
            'choose': DATABASE.getChoose(),
            'latitude': sessionStorage.getItem('latitude'),
            'longitude': sessionStorage.getItem('longitude')
        }
    },
    setCityName: (name) => {
        DATABASE.setChoose('Nome');
        sessionStorage.setItem('city_name', name);
    },
    getCityName: () => {
        return {
            'choose': DATABASE.getChoose(),
            'city_name': sessionStorage.getItem('city_name')
        }
    },
    clearAll: () => {
        sessionStorage.clear();
    }
}
export default DATABASE;