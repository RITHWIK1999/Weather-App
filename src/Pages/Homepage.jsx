import axios from "axios";
import React, { useState } from "react";
import Temp from "../Components/Temp";
import Searchbar from "../Components/Searchbar";
import Wind from "../Components/Wind";

function Homepage() {
  const [useData, setUseData] = useState("");
  const [searchData, setSearchData] = useState({ name: " " });
  const [error, setError] = useState(null);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  const handleSearchData = (e) => {
    const { name, value } = e.target;
    setSearchData({ ...searchData, [name]: value });
  };

  const handleFetchData = async () => {
    try {
      const place = searchData.name.trim();
      if (!place) {
        setError("City name cannot be empty.");
        return;
      }

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=imperial&appid=638930cef85ff891b5b6eb1b3596bcdd`
      );

      setUseData(response.data);
      setSearchData({ name: "" }); 
      setError(null);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please try again.");
      } else {
        setError("Could not fetch weather. Please try again later.");
      }
    }
  };
  const fahrenheitToCelsius = (tempFahrenheit) => {
    const tempCelsius = ((tempFahrenheit - 32) * 5) / 9;
    return tempCelsius.toFixed(2);
  };
  const backgroundImage = (weatherCondition) => {
    switch (weatherCondition) {
      case "Rain":
        return "url('https://images.pexels.com/photos/3207527/pexels-photo-3207527.jpeg')";
      case "Clear":
        return "url('https://images.pexels.com/photos/16015/pexels-photo.jpg')";
      case "Clouds":
        return "url('https://images.pexels.com/photos/552789/pexels-photo-552789.jpeg')";
      case "Snow":
        return "url('https://images.pexels.com/photos/2403402/pexels-photo-2403402.jpeg')";
      case "Thunderstorm":
        return "url('https://images.pexels.com/photos/2258536/pexels-photo-2258536.jpeg')";
      case "Drizzle":
        return "url('https://images.pexels.com/photos/68357/pexels-photo-68357.jpeg')";
      case "Mist":
      case "Fog":
        return "url('https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg')";
      default:
        return "url('https://images.pexels.com/photos/751005/pexels-photo-751005.jpeg')";
    }
  };
  


  return (
    <div style={{backgroundImage: useData ? backgroundImage(useData.weather[0]?.main) : "url('https://images.pexels.com/photos/751005/pexels-photo-751005.jpeg')"}} className="bg-cover bg-center bg-no-repeat min-h-screen">
      <Searchbar
        onClick={handleFetchData}
        onChange={handleSearchData}
        name="name"
        submit="Search"
        value={searchData.name} 
      />
      {error && <p className="error text-right pe-3 text-white">{error}</p>}
      <h2 className="text-center text-white font-bold">{formattedDate}</h2>
      <div className="flex justify-center">
        <div>
          {useData && (
            <div>
            <div className="md:ps-36 ps-14">
              {useData.weather[0]?.icon ? (
                <img
                  src={`http://openweathermap.org/img/wn/${useData.weather[0].icon}@2x.png`}
                  alt={useData.weather[0]?.description || "Weather icon"}
                  style={{ width: "150px", height: "150px",textAlign:"center" }}
                />
              ) : (
                <p>Weather icon not available</p>
              )}
              </div>
              <div>
              <Temp
                temp={fahrenheitToCelsius(useData.main.temp)}
                country={useData.sys.country}
                description={useData.weather[0].main}
                city={useData.name}
              />
              </div>
              
            </div>
          )}
        </div>
      </div>
      <div className="pt-10">
        {useData && (
          <Wind
            humidity={useData.main.humidity}
            pressure={useData.main.pressure}
            sea_level={useData.main.sea_level}
            wind={useData.wind.speed}
          />
        )}
      </div>
    </div>
  );
}

export default Homepage;
