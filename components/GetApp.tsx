import React from "react";
import Image from "next/image";
import Button from "./Button";

const GetApp = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container  get-app mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Get for free now!
          </h1>
          <p className="mb-8 leading-relaxed">Available on IOS Android</p>
          <div className="flex justify-center flex-wrap ">
            <Button
              type="button"
              icon="/apple.svg"
              title="Download App"
              variant="bg-gray-100"
              color="text-gray-500"
            />

            <Button
              type="button"
              icon="/android.svg"
              title="Download App"
              variant="text-gray-100"
            />
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src="/phones.png"
            alt="phones"
            width={400}
            height={350}
            className="  object-center w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
