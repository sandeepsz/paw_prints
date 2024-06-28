import React from "react";
import { Button } from "./ui/button";

const Help = () => {
  return (
    <section className="h-screen w-auto mt-96 md:mt-10 ">
      <div className="">
        <div className="flex w-auto flex-col gap-6 items-center justify-center">
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
      </div>
      <div>Card</div>
      <div>
        <Button>View All Cause</Button>
      </div>
    </section>
  );
};

export default Help;
