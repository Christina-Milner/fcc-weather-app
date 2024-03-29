'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import axios from "axios";

//https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env.DUCKY_WEATHER_KEY}&cnt=56

// Using ChatGPT to create a type for the data? No thanks, but I'll copy it from the github repo

// React query to fetch data - npm i react-query

interface WeatherDetail {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface WeatherData {
  cod: string;
  message: number;
  cnt: number;
  list: WeatherDetail[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
}

export default function Home() {
  const { isLoading, error, data } = useQuery<WeatherData>
    'repoData',
     async () => {
      const {data} = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env.DUCKY_WEATHER_KEY}&cnt=56`
        );
    return data;
  }
  );
  //fetch('https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env.DUCKY_WEATHER_KEY}&cnt=56').then(res =>
  //  res.json()
  //) We're using Axios for this instead because why wouldn't you install an extra thing for every line of code that you write
console.log("data", data)
if (isLoading) return 'Loading...'

  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
    </div>);    
}
