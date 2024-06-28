import { CARD_DATA } from "@/constants";
import React from "react";
import Card from "./Card";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const Donation = () => {
  return (
    <section className="h-screen cream mt-96 md:mt-24 pt-14">
      <div className="w-auto flex flexCol gap-6">
        <div className=" flexCol gap-6 ">
          <h3 className=" font-semibold text-sm text-color-brown">
            A HELP TO THOSE WHO NEED IT
          </h3>
          <h1 className="font-mont font-medium text-2xl md:text-4xl text-center">
            Each donation is an essential
          </h1>
          <p className="text-center text-base text-color-slate">
            We advovate for vulnerable animals, providing safety while promoting
            reponsible pet ownership. We
            <br /> uplift both animals and communities.
          </p>
        </div>
        <div className="md:flexBetween gap-8">
          {CARD_DATA.map((data) => (
            <Card
              key={data.title}
              title={data.title}
              image={data.image}
              link={data.link}
              goal={data.goal}
              raised={data.raised}
              progress={data.progress}
              description={data.description}
            />
          ))}
        </div>
        <div>
          <Button className="text-lg gap-2" variant="default" size="medium">
            View All Cause
            <MoveRight width={24} height={24} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Donation;
