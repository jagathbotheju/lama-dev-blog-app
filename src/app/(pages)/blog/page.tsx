import Container from "@/components/Container";
import Post from "@/components/Post";
import { posts } from "@/lib/posts";
import Link from "next/link";

const BlogPage = () => {
  return (
    <Container>
      <div className="flex flex-wrap mt-10 p-10 gap-4 justify-center last:justify-start">
        {posts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <Post post={post} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default BlogPage;
