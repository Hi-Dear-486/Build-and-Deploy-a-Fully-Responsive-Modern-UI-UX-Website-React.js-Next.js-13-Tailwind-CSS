import React from "react";
import Image from "next/image";
import { FEATURES } from "@/contants";

const Features = () => {
  return (
    <section className="text-gray-600 body-font">
      <Image
        src="/camp.svg"
        alt="camp"
        width={50}
        height={50}
        className="mx-auto w-auto h-auto"
      />

      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900  text-center">
        Our Features
      </h1>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-[30%] rotate-6 md:w-[0px]  w-full mb-10 lg:mb-0 rounded-lg">
          <Image
            src="/phone.png"
            alt="phone"
            width={200}
            height={200}
            className="w-auto h-auto object-cover object-center ml-6"
          />
        </div>
        <div className="flex flex-row justify-between   flex-wrap lg:py-6 -mb-10 lg:w-[65%] lg:pl-12 lg:text-left text-center">
          {FEATURES.map((items) => (
            <Featuresitems
              key={items.title}
              icon={items.icon}
              title={items.title}
              description={items.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureItem {
  title: string;
  icon: string;
  description: string;
  key: string;
}

const Featuresitems = ({ key, icon, title, description }: FeatureItem) => {
  return (
    <div className="flex flex-col lg:items-start items-center" key={key}>
      <div className="w-12  h-12 inline-flex items-center justify-center rounded-full   mb-5 bg-green-50">
        <Image src={icon} alt={title} width={12} height={12} />
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
          {title}
        </h2>
        <p className="leading-relaxed text-base max-w-80 text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};
export default Features;
