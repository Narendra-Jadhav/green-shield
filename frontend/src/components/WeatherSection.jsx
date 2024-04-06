// import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import CurrentWeather from "../service/current-weather";
import Search from "../service/search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "../service/api";

const WeatherSection = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch(console.log);
  };

  return (
    <div>
      <img
        className="w-full object-cover rounded-lg brightness-50"
        src="/weather.jpg"
        alt="weather image"
      />
      <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4">
        <h2 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold">
          Check Weather
        </h2>
        <div className="container">
          <Search onSearchChange={handleOnSearchChange} />
          {currentWeather && <CurrentWeather data={currentWeather} />}
        </div>
        {/* <p className="text-white text-xl pt-4 sm:pt-8">
          Get live weather updates of your location
        </p>
        <div>
          <div className="bg-green-900 hover:bg-green-600 text-white rounded-full w-fit flex items-center px-4 py-2 sm:px-6 sm:py-3 gap-4 text-[14px] cursor-pointer">
            Check Now <BsArrowRight />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WeatherSection;
