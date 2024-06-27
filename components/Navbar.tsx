import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="fixed w-auto p-4 rounded-lg flexBetween top-8 bg-white z-30">
      {/* Logo */}
      <Link href="/">
        <div className="font-oleo logo text-color-brown border-r-2 border-color-secondary pr-4">
          Paw Prints
        </div>
      </Link>

      {/* Navbar Links */}
      <ul className="hidden md:flex items-center gap-12">
        {NAV_LINKS.map((link) => (
          <Link
            className="flex items-center gap-2"
            href={link.href}
            key={link.key}
          >
            {link.label}
            {link.icon && <link.icon width={14} />}
          </Link>
        ))}
      </ul>
      {/* Navbar Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <Button
          className="text-lg text-color-brown"
          size="medium"
          variant="outline"
        >
          Volunteer
        </Button>
        <Button className="text-lg" size="medium" variant="default">
          Donate
        </Button>
      </div>
    </nav>
  );
};
export default Navbar;
