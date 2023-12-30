import Container from "@/components/Container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <Container>
      <div className="rounded-md bg-slate-300 p-10 gap-5 flex flex-col">
        <h1 className="font-bold text-4xl text-slate-500">Page Not Found!</h1>
        <Link href="/" className={cn(buttonVariants(), "w-fit text-slate-800")}>
          Return Home
        </Link>
      </div>
    </Container>
  );
};

export default NotFoundPage;
