import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus'
import { useRouter } from 'vue-router'
const API = {
    request: axios,
    position: {
        latitude: '',
        longitude: ''
    },
    data: {
        key: '17284dd0',
        //proxy configurado - vue.config.js
        url: '/weather',
        endpoint: 'weather',
        woeid: 0,
    },
    fullUrl: () => API.data.url + '?key=' + API.data.key,
    baseUrl: () => {
        return new URL(API.fullUrl()).href;
    },
    change_city: {
        getWoeid: async (city) => {
            let url = `https://api.hgbrasil.com/stats/find_woeid?key=${API.data.key}&format=json-cors&sdk_version=console&city_name=${city}`;
            url = new URL(url).href;
            let result = await axios.get(url);
            return result.data;
        }
    },
    urls: {
        urlWoeid: (woedi) => {
            let code = `&woeid=${woedi}`;
            let url = API.fullUrl() + code;
            return url;
        },
        urlCityName(name) {
            let city_name = `&city_name=${name}`;
            let url = API.fullUrl() + city_name;
            return url;
        },
        urlLocation(latitude, longitude) {
            let location = `&lat=${latitude}&lon=${longitude}`;
            let url = API.fullUrl() + location;
            return url;
        }
    },
    getPositionYourLocation: (callback) => {

        navigator.geolocation.getCurrentPosition(function (position) {
            // position.coords.latitude - position.coords.longitude
            callback(position)
        }, function (error) {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    ElMessage({
                        message: 'Habilite a permissão de localização e tente novamente',
                        type: 'error',
                    });
                    break;
                case error.POSITION_UNAVAILABLE:
                    ElMessage({
                        message: "Informações de localização indisponíveis.",
                        type: 'error',
                    });
                    break;
                case error.TIMEOUT:
                    ElMessage({
                        message: "Tempo para obter a localização expirou.",
                        type: 'error',
                    });
                    break;
                case error.UNKNOWN_ERROR:
                    ElMessage({
                        message: "Erro desconhecido ao obter a localização.",
                        type: 'error',
                    });
                    break;
            }
        });
    }
}
export default API;