import axios from 'axios';
const API = {
    request: axios,
    data: {
        key: '17284dd0',
        url: 'https://api.hgbrasil.com/',
        endpoint: 'weather',
        woeid: 0,
    },
    fullUrl: () => API.data.url + API.data.endpoint + '?key=' + API.data.key,
    baseUrl: () => {
        return new URL(API.fullUrl()).href;
    },
    toUrl: (url) => new URL(url),
    change_city: {
        getWoeid: async (city) => {
            let url = `https://api.hgbrasil.com/stats/find_woeid?key=${API.data.key}&format=json-cors&sdk_version=console&city_name=${city}`;
            url = API.toUrl(url).href;
            let result = await axios.get(url);
            return result.data;
        }
    },
    urls: {
        urlUserIp: (userIp = null) => {
            let user_ip = 'remote';
            if (userIp) {
                user_ip = userIp;
            }
            let url = API.fullUrl() + '&user_ip=' + user_ip;
            return API.toUrl(url).href;
        },
        urlCityName(name, state) {
            let city_name = `&city_name=${name},${state}`;
            let url = API.fullUrl() + city_name;
            return API.toUrl(url).href;
        }
    }
}
export default API;