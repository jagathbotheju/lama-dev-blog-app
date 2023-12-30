"use client";
import Link from "next/link";
import Container from "./Container";
import NavLinkItem from "./NavLinkItem";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DoorClosed, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
const navLinks = [
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/contact",
    label: "Contact",
  },
  {
    href: "/about",
    label: "About",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <div className="flex items-center justify-between p-5 w-full">
        <Link href="/" className="font-bold text-xl md:text-3xl">
          MyBlog
        </Link>
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map((item, index) => (
            <NavLinkItem key={index} href={item.href} label={item.label} />
          ))}
        </div>

        {/* mobile drawer */}
        <Sheet open={open} onOpenChange={() => setOpen(!open)}>
          <SheetTrigger asChild>
            <Menu
              className="flex md:hidden cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </SheetTrigger>
          <SheetContent className="w-[35%]">
            <div className="flex flex-col mt-5 gap-2">
              {navLinks.map((item, index) => (
                <NavLinkItem
                  key={index}
                  href={item.href}
                  label={item.label}
                  setOpen={setOpen}
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </Container>
  );
};

export default Navbar;
