class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.feelslike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.display_location.full;
        this.desc.textContent = weather.weather;
        this.string.textContent = 'Temp:   ' + weather.temperature_string;
        // this.details.textContent = weather.weather;
        this.icon.setAttribute('src', weather.icon_url);
        this.humidity.textContent = 'Humidity:   ' + weather.relative_humidity;
        this.dewpoint.textContent = 'Dewpoint:   '  + weather.dewpoint_string;
        this.feelslike.textContent = 'Feels like:   ' + weather.feelslike_string;
        this.wind.textContent = 'Wind:   ' + weather.wind_kph;
    }
}
