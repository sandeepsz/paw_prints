import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Cta = () => {
  return (
    <section className="h-full mt-[450px] md:mt-24">
      <div className="relative md:w-[1150px] py-10  mx-4 rounded-lg h-80 md:h-56 w-auto  bg-color-brown lg:gap-28 text-center md:text-start md:mx-auto lg:mt-8 ">
        <div className="absolute  rounded-br-full w-32 h-32  z-50 top-0 left-0 hero">
          <div className="absolute w-24 h-24 top-0 rounded-br-full left-0 bg-color-brown"></div>
        </div>
        <div className="absolute  rounded-tl-full w-32 h-32  z-50 bottom-0 right-0 hero">
          <div className="absolute w-24 h-24 bottom-0 rounded-tl-full right-0 bg-color-brown"></div>
        </div>
        <Image
          className="absolute hidden md:block z-50 bottom-0 left-6"
          src="/hero/goldendog.png"
          width={220}
          height={220}
          alt="golden dog"
        />

        <Image
          className="absolute hidden md:block z-50 -bottom-4 right-2"
          src="/hero/animal-shelter-img.png"
          width={130}
          height={130}
          alt="golden dog"
        />
        <div className="flex flex-col gap-3">
          <h1 className="text-center font-bold font-mont text-xl md:text-4xl text-white">
            Get Involved
          </h1>
          <p className="text-white text-xs md:text-base  text-center">
            Our work is made possible by the generosity of people like you, who
            have contributed to our mission to <br /> improve the lives of all
            animals.
          </p>
          <div className=" flex md:flex-row flex-col  z-50 gap-4 mx-auto">
            <Button
              className="bg-white text-xs text-color-brown hover:bg-white"
              size="smallMedium"
            >
              Adopt and donate to help Us
              <ArrowRight width={20} height={20} />
            </Button>
            <Button
              className="bg-white  text-xs text-color-brown hover:bg-white"
              size="smallMedium"
            >
              Adopt and donate to help Us
              <ArrowRight width={20} height={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
