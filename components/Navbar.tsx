import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <div className="font-oleo">Paw Prints</div>
      </Link>
    </nav>
  );
};
export default Navbar;
