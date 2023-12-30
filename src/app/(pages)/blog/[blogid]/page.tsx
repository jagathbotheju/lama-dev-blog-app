import Container from "@/components/Container";
import { posts } from "@/lib/posts";
import moment from "moment";
import Image from "next/image";

interface Props {
  params: {
    blogid: string;
  };
}

const BlogDetailsPage = ({ params }: Props) => {
  const post = posts.find((post) => post.id === params.blogid);
  console.log(params);

  return (
    <Container className="mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 content-center px-4 text-slate-200">
        {/* image */}
        <div className="">
          <Image
            src={post?.image ? post.image : "/no-image.jpg"}
            alt="contact image"
            width={600}
            height={500}
            layout="responsive"
            className="object-cover"
          />
        </div>

        {/* details */}
        <div className="flex flex-col">
          <p className="text-2xl font-bold">{post?.title}</p>
          <p className="font-semibold">{post?.author}</p>
          <p>{moment(post?.createdAt).format("YYYY-MM-DD")}</p>
          <p className="text-xs text-justify">{post?.description}</p>
        </div>
      </div>
    </Container>
  );
};

export default BlogDetailsPage;
