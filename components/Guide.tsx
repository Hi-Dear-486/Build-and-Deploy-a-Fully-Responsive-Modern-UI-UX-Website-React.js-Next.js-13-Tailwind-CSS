import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="w-auto h-auto"
          />
          <span>WE ARE HERE FOR YOU</span>
          <h1 className="title-font mt-4 sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Guide you to Easy Path
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your Friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
        <div className="lg:max-w-lg  lg:w-full h-[250px] lg:h-[300px]  md:w-1/2 w-5/6 ">
          <Image
            src="/boat.png"
            alt="boat"
            width={400}
            height={400}
            className="w-full h-full object-cover object-center 2xl:rounded-5xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Guide;
