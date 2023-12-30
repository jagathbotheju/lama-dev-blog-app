import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import moment from "moment";

interface Props {
  post: Post;
}

type Post = {
  id: string;
  title: string;
  image: string;
  createdAt: string | Date;
  author: string;
  description: string;
};

const Post = ({ post }: Props) => {
  return (
    <Card className="bg-slate-800 hover:cursor-pointer rounded-md w-[300px]">
      <CardContent className="p-0 hover:shadow-2xl hover:shadow-slate-400">
        <div className="h-[200px] w-[300px] relative">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="w-full object-cover rounded-t-md"
          />
        </div>

        <div className="flex flex-col gap-1 mt-1 p-2">
          <h2 className="line-clamp-1 text-lg font-semibold">{post.title}</h2>
          <div className="flex justify-between text-slate-300 items-center text-sm">
            <p className="font-semibold">{post.author}</p>
            <p>{moment(post.createdAt).fromNow()}</p>
          </div>
          <p className="text-xs line-clamp-2 text-slate-400">
            {post.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Post;
