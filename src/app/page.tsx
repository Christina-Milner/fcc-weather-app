import Image from "next/image";
import Navbar from "@/components/Navbar";

//https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${process.env.DUCKY_WEATHER_KEY}&cnt=56

export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-gray-100 min-h-screen">
      <Navbar />
    </div>);    
}
