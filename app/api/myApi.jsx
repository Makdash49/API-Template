var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=29a7aa8f8eb907a68f812683b58cd962&units=imperial';

module.exports = {
  getTemp: function (location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res){
      if (res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return {
          temp: res.data.main.temp,
          name: res.data.name
        }
      }
    }, function (res) {
      if (res.data === undefined) {
        throw new Error("Your input was not found")
      } else {
        throw new Error(res.data.message);
      }
    });
  }
};
