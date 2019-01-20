const IMPA_DISTRICTS = "http://api.ipma.pt/open-data/distrits-islands.json";
const IMPA_FORECAST = "http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/";

class RequestIPMAService {
    // async function
    async getDistricts() {
        let data = await (fetch(IMPA_DISTRICTS)
            .then(res => {
                return res.json();
            })
            .catch(err => {
                console.log('Error: ', err);
            }));
        return data;
    }

    // async function
    async getWeatherByDistrict(globalID) {
        let data = await (fetch(IMPA_FORECAST+globalID+".json")
            .then(res => {
                return res.json();
            })
            .catch(err => {
                console.log('Error: ', err);
            }));
        return data;
    }
}

export default new RequestIPMAService()