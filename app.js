const weather = new Weather('Brisbane', 'Australia');
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);
var myVar = setInterval(getWeather, 120000);


if (localStorage.city && localStorage.country) {
    weather.changeLocation(localStorage.city, localStorage.country);
}

document.getElementById('w-change-btn').addEventListener('click', (e) =>
    {
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        weather.changeLocation(city, country);
        getWeather();

        $('#locModal').modal('hide');

        localStorage.setItem("city", city);
        localStorage.setItem("country", country);

    });

function getWeather() {
    weather.getWeather()
    .then(results => {
        // console.log(results);
        ui.paint(results);
    })
    .catch(err => console.log(err));
    console.log('Weather Updated...');
}
