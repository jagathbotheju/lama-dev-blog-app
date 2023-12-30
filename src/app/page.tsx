import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaReddit, FaDiscord, FaStream, FaTwitch } from "react-icons/fa";

export default function Home() {
  return (
    <Container className="mt-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 content-center px-4">
        {/* image */}
        <div className="">
          <div className="flex flex-col">
            <div className="font-bold text-6xl">
              <h1>Creative</h1>
              <h1>Thoughts</h1>
              <h1>Agency.</h1>
            </div>
            <p className="mt-10 text-sm py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio in
              veniam animi dolor exercitationem eos ipsum et quis quas obcaecati
            </p>

            <div className="flex gap-4 py-5">
              <Button>Learn More</Button>
              <Button variant="secondary">Contact</Button>
            </div>

            <div className="flex gap-4 text-slate-500">
              <div className="flex">
                <FaReddit size={20} />
                <p>reddit</p>
              </div>
              <div className="flex">
                <FaDiscord size={20} />
                <p>discord</p>
              </div>
              <div className="flex">
                <FaStream size={20} />
                <p>stream</p>
              </div>
              <div className="flex">
                <FaTwitch size={20} />
                <p>twitch</p>
              </div>
            </div>
          </div>
        </div>
        <Image
          src="/hero.gif"
          alt="hero image"
          layout="responsive"
          width={400}
          height={400}
          className="object-cover"
        />
      </div>
    </Container>
  );
}
