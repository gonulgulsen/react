import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';

const CityContext = createContext();

export const CityProvider = ({children}) => {
  const [city, setCity] = useState("Istanbul");
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  const cityList = [
    "Istanbul", "Ankara", "Izmir", "Bursa", "Adana", "Antalya", "Konya", "Gaziantep"
  ];

  useEffect(() => {
    async function fetchWeather() {
      setLoading(true);
      const API_KEY = "1837485837164188b9c130833251606";

      try {
        const res = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&lang=tr`
        );
        setWeather(res.data.forecast.forecastday); 
      } catch (e) {
        setWeather([]);
      } finally {
        setLoading(false);
      }
    }
    fetchWeather();
  }, [city]);

  const values = {
    city, setCity,
    weather, 
    cityList,
    loading
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>
};

export const useCity = () => useContext(CityContext);
