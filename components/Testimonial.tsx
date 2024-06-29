"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface TestimonialType {
  fullName: string;
  content: string;
  imagePath: string;
}

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_TESTIMONIAL_API}`
        );
        setTestimonials(response.data.testimonial);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="h-screen md:mt-20 pt-14 md:pt-0 ">
      <div className="w-auto">
        <div className="flex w-auto flex-col gap-6 items-center justify-center">
          <h3 className=" font-semibold text-sm text-color-brown">
            WHO WE ARE AND OUR MISSION
          </h3>

          <h1 className="font-mont font-medium text-2xl md:text-4xl text-center">
            About Our Shelter and values
          </h1>
          <p className="text-center text-base text-color-slate">
            We advovate for vulnerable animals, providing safety while promoting
            reponsible pet ownership. We
            <br /> uplift both animals and communities.
          </p>
        </div>
        <div className="md:w-[1150px] mx-auto  w-auto md:flexBetween lg:gap-28 text-center md:text-start  mt-20 md:mt-28 lg:mt-8 ">
          <Carousel className="" orientation="horizontal">
            <CarouselContent>
              {testimonials.map((testimonial: TestimonialType) => (
                <CarouselItem key={testimonial.fullName}>
                  <div className="md:flexBetween gap-28">
                    <Image
                      className="rounded-sm md:mx-0 mx-auto w-80 h-96"
                      src={testimonial.imagePath}
                      width={800}
                      height={900}
                      alt="dogs"
                      objectFit="cover"
                    />

                    <div className="flex flex-col items-start justify-start">
                      <div className="font-bold text-5xl">&ldquo;</div>
                      <div className="w-auto">{testimonial.content}</div>
                      <div className="font-mont font-semibold text-sm">
                        {testimonial.fullName}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="top-[600px] md:top-72 left-[42%] -translate-y-1/2 rotate-90" />
            <CarouselNext className="top-[600px] bottom-0 md:top-72 left-[36%] -translate-y-1/2 rotate-90" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
