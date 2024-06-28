"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  goal: number;
  raised: number;
  progress: number;
  image: string;
  link: string;
}

const Card = ({
  image,
  description,
  goal,
  raised: initialRaised,
  title,
  link,
  progress,
}: CardProps) => {
  const [sliderValue, setSliderValue] = useState([progress]);
  const [raised, setRaised] = useState(initialRaised);

  useEffect(() => {
    const newRaised = (goal * sliderValue[0]) / 100;
    setRaised(newRaised);
  }, [sliderValue, goal]);

  return (
    <div className="flexCol w-full gap-10 md:my-0 my-12 shadow-lg">
      <div>
        <Image
          className="rounded-t-sm"
          src={image}
          alt="cause image"
          width={300}
          height={500}
        />
      </div>
      <div className="cream flexCol gap-4 px-2">
        <div className="flexBetween gap-16">
          <p className="font-medium text-xs">GOAL:${goal}</p>
          <p className="font-medium text-xs">
            RAISED:${raised.toFixed(2).split(".")[0]}
          </p>
        </div>
        <Slider
          value={sliderValue}
          onValueChange={(value) => setSliderValue(value)}
          className="w-full"
        />
      </div>
      <div className="bg-white w-full">
        <div className="flexStart gap-4 w-72 p-8">
          <p className="font-mont  text-color-black font-medium text-base">
            {title}
          </p>
          <p className="text-color-slate text-xs">{description}</p>
          <Link className="flex items-center  text-color-brown gap-2" href="/">
            VIEW DETAILS
            <MoveRight width={16} height={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
