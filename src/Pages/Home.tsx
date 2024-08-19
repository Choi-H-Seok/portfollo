import React from "react";
import Hero1 from "../Component/HomeComponent/Hero1";
import Hero2 from "../Component/HomeComponent/Hero2";
import Hero3 from "../Component/HomeComponent/Hero3";
import Hero4 from "../Component/HomeComponent/Hero4";
import Hero5 from "../Component/HomeComponent/Hero5";

function Home() {
  return (
    <div className="bg-gray-900">
      <div className="grid">
        <Hero1></Hero1>
      </div>
      <div className="grid">
        <Hero2></Hero2>
      </div>
      <div className="grid">
        <Hero3></Hero3>
      </div>
      <div className="grid">
        <Hero4></Hero4>
      </div>
      <div className="grid">
        <Hero5></Hero5>
      </div>
    </div>
  );
}

export default Home;
