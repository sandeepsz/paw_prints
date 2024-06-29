"use client";
import { DONATION_PRICE } from "@/constants";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { Slider } from "./ui/slider";
import Link from "next/link";

const Donation = () => {
  const goal = 1340;
  const [sliderValue, setSliderValue] = useState([60]);
  const [donationAmount, setDonationAmount] = useState(10);
  const [raised, setRaised] = useState(goal);

  useEffect(() => {
    const newRaised = (goal * sliderValue[0]) / 100;
    setRaised(newRaised);
  }, [sliderValue, goal]);

  const handleDonationChange = (amount: number) => {
    setDonationAmount(amount);
  };

  return (
    <section className="h-full md:mt-24 pt-14">
      <div className="md:w-[1150px] w-auto md:flexBetween lg:gap-28 text-center md:text-start mx-auto lg:mt-8 ">
        <div className="relative md:mx-0 mx-auto w-80 h-96">
          <Image
            src="/donate/donate-dog.png"
            alt="Dog"
            width={300}
            height={500}
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute bottom-14 -right-6 bg-black rotate-90 text-white px-2 py-1 rounded">
            Pawprints
          </div>
        </div>
        <div className="md:mx-0 mx-6">
          <div className=" flex flex-col mt-10  gap-6 ">
            <h3 className=" font-semibold text-sm md:text-start text-color-brown">
              A HELP TO THOSE WHO NEED IT
            </h3>
            <h1 className="font-mont font-medium text-2xl md:text-start md:text-4xl text-center">
              Transform lives with donations
            </h1>
            <p className="text-center md:text-start text-base text-color-slate">
              Your donation can save lives. Help us provide care and find loving
              homes for rescued
              <br /> animals. Every contribution counts. Donate now!
            </p>
            <Slider
              value={sliderValue}
              onValueChange={(value) => setSliderValue(value)}
              className="md:w-full w-auto"
            />
            <div className="flexBetween gap-16">
              <p className="font-medium text-xs">GOAL:${goal}</p>
              <p className="font-medium text-xs">
                RAISED:${raised.toFixed(2).split(".")[0]}
              </p>
            </div>

            <div className="border text-slate-600 rounded-sm border-slate-300 border-1 p-2 w-40">
              <span className="pr-8  mr-4 border-slate-300  py-2 border-r ">
                $
              </span>
              {donationAmount}
            </div>

            <div className="flexBetween">
              {DONATION_PRICE.map((data) => (
                <Button
                  key={data.amount}
                  size="sm"
                  variant="outline"
                  onClick={() => handleDonationChange(data.amount)}
                >
                  ${data.label}
                </Button>
              ))}
            </div>
            <Link href="/" className="md:mx-0 mx-auto">
              <Button className="text-lg gap-2" variant="default" size="medium">
                Donate Now
                <MoveRight width={24} height={24} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
