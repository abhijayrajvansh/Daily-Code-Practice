'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define interfaces for the data structure
interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  air_quality: {
    co: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    'us-epa-index': number;
    'gb-defra-index': number;
  };
}

interface WeatherData {
  location: Location;
  current: Current;
}

const WeatherComponent: React.FC = () => {
  // Define state to store the fetched data
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const API_URL = 'https://api.weatherapi.com/v1/current.json?key=3d3dd43aa77149eaa8d15206232512&q=london&aqi=no'

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get<WeatherData>(API_URL);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <div>
      {weatherData && (
        <>
          <h1>Weather in {weatherData.location.name}, {weatherData.location.country}</h1>
          <p>Current Temperature: {weatherData.current.temp_c}°C ({weatherData.current.temp_f}°F)</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
          {/* Add more dynamic rendering based on your needs */}
        </>
      )}
    </div>
  );
};

export default WeatherComponent;
