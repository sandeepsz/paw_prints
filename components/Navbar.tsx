import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed rounded-2xl p-6 bg-white flexBetween gap-x-20 left-10 top-[32px]  z-30 py-5">
      <div className="flexCenter gap-8">
        {/* Logo */}
        <Link href="/">
          <div className="font-oleo logo text-color-primary border-r-2 border-color-secondary pr-4">
            Paw Prints
          </div>
        </Link>

        {/* Navbar Links */}
        <ul className=" hidden md:flexCenter gap-12 ">
          {NAV_LINKS.map((link) => (
            <Link className=" flexCenter gap-2" href={link.href} key={link.key}>
              {link.label}
              {link.icon && <link.icon width={14} />}
            </Link>
          ))}
        </ul>
      </div>

      {/* Navbar Buttons */}

      <div className="hidden md:flexCenter gap-4">
        <Button
          className="text-lg text-color-primary"
          size="medium"
          variant="outline"
        >
          Volunteer
        </Button>
        <Button className="text-lg " size="medium" variant="default">
          Donate
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
