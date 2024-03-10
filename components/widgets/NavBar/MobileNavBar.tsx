import { navLinks } from "@/app/constants/Links";
import Link from "next/link";

export default function MobileNavBar() {
  return (
    <div className="flex md:hidden fixed bottom-0 left-0 w-full bg-background shadow-lg border-t rounded-t-lg  gap-x-4  z-50 py-4">
      <nav className="flex items-center justify-evenly  container ">
        {navLinks.map((item, index) => {
          const { name, href, icon: Icon } = item;

          return (
            <Link
              key={index}
              href={href}
              className="size-10 p-2 grid place-content-center"
            >
              <div className="flex flex-col items-center gap-y-1 hover:text-primary">
                <Icon className="size-6 "/>
                <span className="text-sm font-semibold ">{name}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
