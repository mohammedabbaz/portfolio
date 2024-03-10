import Link from "next/link";
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import { navLinks } from "@/app/constants/Links";
import MobileNavBar from "./MobileNavBar";

export default function NavBar() {
  return (
    <header className="fixed top-0 flex justify-between w-full bg-background/50 py-2 z-30">
      <div className="container flex items-center justify-between py-4">
        {/* logo */}
        <Logo />
        {/* nav links   */}
        <nav className="hidden sm:flex items-center gap-x-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className=" capitalize font-medium hover:font-semibold "
            >
              {link.name}
            </Link>
          ))}
      
          
        </nav>
        {/* dark mode toogle button */}
        <ThemeToggler />
      </div>
    </header>
  );
}
