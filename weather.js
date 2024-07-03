
function getData()
{
    const city_name = search.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '26279a884dmsh88cbf1d17e848d5p165de7jsnd17314261ef4',
            'X-RapidAPI-Host': 'weather-api138.p.rapidapi.com'
        }
    };
    
    fetch('https://weather-api138.p.rapidapi.com/weather?city_name='+city_name, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            temp.innerHTML = response.main.temp;
            ws.innerHTML = response.wind.speed;
            hmdty.innerHTML = response.main.humidity;

        })
        .catch(err => console.error(err));
}

/*
                'x-rapidapi-key': '26279a884dmsh88cbf1d17e848d5p165de7jsnd17314261ef4',
                'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
            }
        };

        fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f'+city, options)
*/

/*
const url = 'https://get_weather1.p.rapidapi.com/get_weather?city=';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '94efaa0293msh9bdf271115fb3b6p186d87jsn8a084f0eda44',
		'x-rapidapi-host': 'get_weather1.p.rapidapi.com'
*/

/*
const url = 'https://current-weather-from-city-zip.p.rapidapi.com/?q=london';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '26279a884dmsh88cbf1d17e848d5p165de7jsnd17314261ef4',
		'x-rapidapi-host': 'current-weather-from-city-zip.p.rapidapi.com'
*/

/*
'X-RapidAPI-Key': '0fa9ebae3cmsh524a1994e11af3ap13953ajsn63f83424600e',
'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
*/