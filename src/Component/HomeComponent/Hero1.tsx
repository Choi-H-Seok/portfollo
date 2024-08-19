import React from "react";
import Developer from "../../assets/img/developer 1.png";

function Hero1() {
  return (
    <div className="bg-gray-900 h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
          <div className="col-span-12 md:col-span-6 flex flex-col justify-center">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl">
              안녕하세요
            </h1>
            <h3 className="text-white text-2xl md:text-3xl lg:text-4xl mt-4">
              개발자 최현석 입니다.
            </h3>
          </div>
          <div className="col-span-12 md:col-span-6 flex justify-center items-center">
            <img
              src={Developer}
              alt="Developer"
              className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
