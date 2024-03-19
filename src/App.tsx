import React from "react";
import TodayCard from "./components/TodayCard";

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col items-center">
      <h1 className="font-bold italic">Weather App</h1>
      <TodayCard/>
    </div>
  );
}

export default App;
