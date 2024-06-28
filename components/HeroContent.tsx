import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const HeroContent = () => {
  return (
    <>
      <div className="w-[1150px] flexBetween lg:gap-28 text-center md:text-start md:mx-12 mt-20 md:mt-28 lg:mt-8">
        <div className="flex flex-col gap-8">
          <Carousel className="" orientation="horizontal">
            <CarouselContent>
              <CarouselItem>
                <div className="flex flex-col gap-6 md:mt-28">
                  <p className="font-semibold text-sm">
                    SAVING LIVES EVERY DAY
                  </p>
                  <p className="font-bold md:text-5xl text-3xl">
                    Saving lives of cats and
                    <br />
                    dogs across world{" "}
                  </p>
                  <p className="font-normal text-sm">
                    We advovate for vulnerable animals, providing safety while
                    promoting reponsible pet
                    <br />
                    ownership. We uplift both animals and communities.
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>.......</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div>
            <Button
              className="text-lg md:flexBetween gap-1"
              variant="default"
              size="medium"
            >
              About Us
              <MoveRight width={24} height={24} />
            </Button>
          </div>
        </div>
        <div className=" md:block hidden md:h-72 md:w-56 border-4  border-white bg-color-indigo rounded-tr-full rounded-tl-full">
          <Image
            width={200}
            height={100}
            src="/Hero/animal-shelter-img.png"
            alt="cat"
          />
        </div>
      </div>
    </>
  );
};

export default HeroContent;
