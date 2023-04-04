let initialState = [
  {"base": "stations", "clouds": {"all": 40}, "cod": 200, "coord": {"lat": 41.85, "lon": -87.65}, "dt": 1680519106, "id": 4887398, "main": {"feels_like": 7.57, "humidity": 75, "pressure": 1009, "temp": 7.57, "temp_max": 9.51, "temp_min": 4.49}, "name": "Chicago", "sys": {"country": "US", "id": 2075214, "sunrise": 1680521414, "sunset": 1680567435, "type": 2}, "timezone": -18000, "visibility": 10000, "weather": [{"description": "scattered clouds", "icon": "03n", "id": 802, "main": "Clouds"}], "wind": {"deg": 194, "gust": 0.89, "speed": 0.89}},
  {"base": "stations", "clouds": {"all": 75}, "cod": 200, "coord": {"lat": 51.5085, "lon": -0.1257}, "dt": 1680518821, "id": 2643743, "main": {"feels_like": 7.07, "humidity": 68, "pressure": 1030, "temp": 9.63, "temp_max": 11.67, "temp_min": 8.25}, "name": "London", "sys": {"country": "GB", "id": 2075535, "sunrise": 1680499924, "sunset": 1680546922, "type": 2}, "timezone": 3600, "visibility": 10000, "weather": [{"description": "broken clouds", "icon": "04d", "id": 803, "main": "Clouds"}], "wind": {"deg": 100, "speed": 5.14}},
  {"base": "stations", "clouds": {"all": 0}, "cod": 200, "coord": {"lat": 35.6895, "lon": 139.6917}, "dt": 1680519013, "id": 1850144, "main": {"feels_like": 10.97, "humidity": 57, "pressure": 1024, "temp": 12.21, "temp_max": 13.12, "temp_min": 11.42}, "name": "Tokyo", "sys": {"country": "JP", "id": 268395, "sunrise": 1680467155, "sunset": 1680512593, "type": 2}, "timezone": 32400, "visibility": 10000, "weather": [{"description": "clear sky", "icon": "01n", "id": 800, "main": "Clear"}], "wind": {"deg": 80, "speed": 6.69}},
  {"base": "stations", "clouds": {"all": 75}, "cod": 200, "coord": {"lat": 48.8534, "lon": 2.3488}, "dt": 1680519364, "id": 2988507, "main": {"feels_like": 5.56, "humidity": 61, "pressure": 1026, "temp": 8.72, "temp_max": 10.48, "temp_min": 7.84}, "name": "Paris", "sys": {"country": "FR", "id": 2041230, "sunrise": 1680499491, "sunset": 1680546168, "type": 2}, "timezone": 7200, "visibility": 10000, "weather": [{"description": "broken clouds", "icon": "04d", "id": 803, "main": "Clouds"}], "wind": {"deg": 40, "speed": 6.17}},
  {"base": "stations", "clouds": {"all": 40}, "cod": 200, "coord": {"lat": -33.8679, "lon": 151.2073}, "dt": 1680518905, "id": 2147714, "main": {"feels_like": 18.2, "humidity": 78, "pressure": 1022, "temp": 18.28, "temp_max": 20.71, "temp_min": 15.9}, "name": "Sydney", "sys": {"country": "AU", "id": 2002865, "sunrise": 1680466083, "sunset": 1680508139, "type": 2}, "timezone": 36000, "visibility": 10000, "weather": [{"description": "scattered clouds", "icon": "03n", "id": 802, "main": "Clouds"}], "wind": {"deg": 50, "speed": 5.14}}
];

export const Reducer = (state = initialState, action) => {

  switch (action.type) {
    case "addCity":
      return [...state, action.payload];

    case "removeCity":
      return state.filter((city, index) => {
        return index !== action.payload;
      });
    default:
      return state;
  }
};
