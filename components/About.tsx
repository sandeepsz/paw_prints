import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { Slider } from "./ui/slider";

const About = () => {
  return (
    <>
      <section className="h-screen md:mt-10 pt-14 md:pt-0 ">
        <div className="w-auto">
          <div className="flex w-auto flex-col gap-6 items-center justify-center">
            <h3 className=" font-semibold text-sm text-color-brown">
              WHO WE ARE AND OUR MISSION
            </h3>

            <h1 className="font-mont font-medium text-2xl md:text-4xl text-center">
              About Our Shelter and values
            </h1>
            <p className="text-center text-base text-color-slate">
              We advovate for vulnerable animals, providing safety while
              promoting reponsible pet ownership. We
              <br /> uplift both animals and communities.
            </p>
          </div>
          <div className="md:w-[1150px] w-auto md:flexBetween lg:gap-28 text-center md:text-start mx-auto mt-20 md:mt-28 lg:mt-8 ">
            <div className="my-10 flexColStart gap-10 ">
              <p className="mx-auto md:text-start  font-mont font-medium text-2xl md:text-4xl">
                Your donations help us run
                <br /> important projects
              </p>
              <p className="text-center mx-auto text-sm  md:text-start md:text-base text-color-slate">
                As a pioneer of the no-kill movement, Paw Print leads the way
                with national and international programs designed to increase
                adoptions and raise awareness about the plight of homeless
                animals, continuing to make a significant impact.
              </p>
              <div className="md:mx-0 mx-auto">
                <Button
                  className="text-lg gap-2"
                  variant="default"
                  size="medium"
                >
                  Donate for Pets
                  <MoveRight width={24} height={24} />
                </Button>
              </div>
            </div>
            <div className="mx-8 md:mx-0">
              <Image
                className="rounded-sm"
                src="/about/Rectangle.png"
                width={2000}
                height={1000}
                alt="dogs"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
