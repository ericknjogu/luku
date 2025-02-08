import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";
import { Facebook, Github, Linkedin, Twitter, X, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialMediaProps {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLinks = [
  {
    title: "X",
    href: "https://www.x.com",
    icon: (
      <img
        height="32"
        width="24"
        className="text-white"
        src="https://unpkg.com/simple-icons@v14/icons/x.svg"
      />
    ),
  },
  {
    title: "github",
    href: "https://github.com/ericknjogu",
    icon: <Github />,
  },
  {
    title: "linkedin",
    href: "https://www.linkedin.com/in/ericknjogu/",
    icon: <Linkedin />,
  },
  {
    title: "facebook",
    href: "https://www.facebook.com",
    icon: <Facebook />,
  },
];

export default function SocialMedia({
  className,
  iconClassName,
  tooltipClassName,
}: SocialMediaProps) {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-4", className)}>
        {socialLinks?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                target="blank"
                className={cn(
                  "p-2 border rounded-full hover-text-white hover-border-white hoverEffect",
                  iconClassName
                )}>
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}>
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
