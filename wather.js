
class Weather {
    constructor(city, country) {
        this.apiKey = '--YOUR WU API KEY--';
        this.city = city;
        this.country = country;
    }

    async getWeather() {
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/geolookup/conditions/q/${this.country}/${this.city}.json`);

        const responseData = await response.json();

        return responseData.current_observation;
    }

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}
