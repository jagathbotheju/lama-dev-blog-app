import Container from "@/components/Container";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Container className="mt-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 content-center px-4">
        <div className="">
          <h3 className="text-primary font-semibold text-xl mb-5">
            About Agency
          </h3>
          <div>
            <p className="text-4xl font-bold mb-8">
              We create digital ideas that are bigger, bolder, braver and
              better.
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              voluptatibus fugit magnam dicta ut vero, optio veniam velit.
              Repellat quidem facilis corporis officiis nemo expedita
              praesentium sunt nesciunt assumenda iste!
            </p>
          </div>

          <div className="flex items-center justify-between mt-10">
            <div className="flex flex-col">
              <h3 className="text-primary font-semibold text-xl">10 K+</h3>
              <p className="text-sm">Years of experience</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-primary font-semibold text-xl">234 K+</h3>
              <p className="text-sm">People reached</p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-primary font-semibold text-xl">05 K+</h3>
              <p className="text-sm">Services and plugin</p>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="">
          <Image
            src="/about.png"
            alt="contact image"
            width={400}
            height={400}
            layout="responsive"
            className="object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
