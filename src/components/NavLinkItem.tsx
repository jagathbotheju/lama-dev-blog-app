"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

interface Props {
  href: string;
  label: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const NavLinkItem = ({ href, label, setOpen }: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onClick={() => (setOpen ? setOpen(false) : null)}
      className={cn(
        "px-5 py-1 rounded-full hover:text-black hover:bg-white ",
        buttonVariants,
        {
          "bg-white text-black font-semibold": pathname === `${href}`,
        }
      )}
    >
      {label}
    </Link>
  );
};

export default NavLinkItem;
