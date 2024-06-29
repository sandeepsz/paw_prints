import React from "react";

const Cta = () => {
  return (
    <section className="h-full mt-96 md:mt-24">
      <div className="md:w-[1150px]  mx-4 rounded-lg h-48 w-auto md:flexBetween bg-color-brown lg:gap-28 text-center md:text-start md:mx-auto lg:mt-8 ">
        <div className="absolute top-0 left-0 h-full w-full">
          <div className="absolute top-0 left-0 h-56 w-56 bg-teal-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute top-0 right-0 h-56 w-56 bg-teal-300 rounded-full translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Content */}
        <h2 className="text-4xl font-bold mb-4">Get Involved</h2>
        <p className="text-center mb-8">
          Our work is made possible by the generosity of people like you, who
          have contributed to our mission to improve the lives of all animals.
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-brown-500 font-semibold py-2 px-4 rounded">
            Adopt & Donate to help us →
          </button>
          <button className="bg-white text-brown-500 font-semibold py-2 px-4 rounded">
            Volunteering opportunities →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
