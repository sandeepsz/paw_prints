import {
  FOOTER_LINKS1,
  FOOTER_LINKS2,
  FOOTER_LINKS3,
  FOOTER_LISTS,
  SOCIAL_MEDIA_LINKS,
} from "@/constants";
import React from "react";
import NewsLetter from "./NewsLetter";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="md:mt-10 pt-14 md:pt-0 ">
      {/* NEWS LETTER */}
      <div className="w-full hero">
        <div className="md:w-[1150px] w-auto py-4 md:flexBetween lg:gap-28 text-center md:text-start mx-auto mt-20 md:mt-28 lg:mt-8 ">
          <div className="">
            <h2 className="font-extrabold font-mont text-xl">
              Join Our Newsletter
            </h2>
            <p className="font-normal my-4 text-base">
              Pawprint that has been for pets{" "}
            </p>
          </div>
          <NewsLetter />
        </div>
      </div>
      <div className="md:w-[1150px] w-auto md:flexBetween lg:gap-28 text-center md:text-start mx-auto mt-20 md:mt-28 lg:mt-8 ">
        <p className="font-oleo sm:text-xl">PawPrints</p>
      </div>
      <div className="md:w-[1150px]  text-xs gap-6 grid grid-cols-2 md:grid-cols-4  lg:gap-28 md:text-start md:mx-auto mx-6 w-full  mt-20 md:mt-28 lg:mt-8 ">
        <div className="flex gap-8 flex-col items-start justify-start">
          <ul>
            <li className="font-mont font-medium text-sm">QUICK LINKS</li>
            {FOOTER_LINKS1.map((link) => (
              <Link key={link.href} href={link.href}>
                <li className="my-3 font-normal text-xs">{link.label}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex gap-8 flex-col items-start justify-start">
          <ul>
            <li className="font-mont font-medium text-sm">RESOURCES</li>
            {FOOTER_LINKS2.map((link) => (
              <Link key={link.href} href={link.href}>
                <li className="my-3 font-normal text-xs">{link.label}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex gap-8 flex-col items-start justify-start">
          <ul>
            <li className="font-mont font-medium text-sm">WAYS TO GIVE</li>
            {FOOTER_LINKS3.map((link) => (
              <Link key={link.href} href={link.href}>
                <li className="my-3 font-normal text-xs">{link.label}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex gap-8 flex-col items-start justify-start">
          {SOCIAL_MEDIA_LINKS.map((link) => (
            <ul key={link.href}>
              <li>
                {link.label1}
                <br />
                {link.label2}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="md:w-[1150px] py-10 border-t border-slate-500 w-auto md:flexBetween lg:gap-28 text-center md:text-start mx-auto mt-20 md:mt-28 lg:mt-8 ">
        <div className="text-center">
          <p>Copyright &copy; 2024 fourpaws.All right Reserved</p>
        </div>
        <div className="flexBetween mx-2 my-4 gap-4">
          {FOOTER_LISTS.map((list) => (
            <ul key={list.href}>
              <li>{list.label}</li>
            </ul>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
