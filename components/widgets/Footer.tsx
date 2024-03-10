import { cn } from "@/lib/utils";
import { Facebook, Github, Linkedin, LucideIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

// link model
type socialLink = {
  url: string;
  icon: LucideIcon;
};

// list of social links
const socialLinks: socialLink[] = [
  {
    icon: Facebook,
    url: "www.facebook.com",
  },
  {
    icon: Github,
    url: "www.gitHup.com/mohammedAbbaz",
  },
  {
    icon: Linkedin,
    url: "facebook",
  },
];

export default function Footer() {
  return (
    <footer className="border-t pb-28 md:pb-4 pt-4">
      <div className="flex flex-col container md:flex-row items-center justify-between  gap-y-4 ">
        <p className="text-sm">
          Copyrite &copy;{new Date().getFullYear()} , All rights reserved.
        </p>
        {/* social media links  */}
        <div className="flex gap-2">
          {socialLinks.map((item, index) => {
            const { icon: Icon, url } = item;
            return (
              <Link
                key={index}
                target="_blank"
                href={url}
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }),
                  "rounded-full"
                )}
              >
                <Icon className=" rounded-full size-4 " />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
