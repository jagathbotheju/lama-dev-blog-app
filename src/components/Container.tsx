"use client";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn("flex w-full md:max-w-5xl mx-auto flex-col", className)}>
      {children}
    </div>
  );
};

export default Container;
