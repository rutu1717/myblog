import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Navbar from "@/components/Navabr";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Metadata } from "next";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: params.slug },
    options
  );

  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <>
      <Navbar />
      <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4 bg-gray-900 text-gray-100">
        <Link href="/" className="hover:underline text-teal-400">
          ← Show More Blogs
        </Link>
        {postImageUrl && (
          <img
            src={postImageUrl}
            alt={post.title}
            className="aspect-video rounded-xl"
            width="550"
            height="310"
          />
        )}
        <h1 className="text-4xl text-teal-300 font-bold mb-8">{post.title}</h1>
        <div className="prose prose-invert prose-teal">
          <p className="text-gray-400">
            Published: {new Date(post.publishedAt).toLocaleDateString()}
          </p>
          {Array.isArray(post.body) && (
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-gray-100">{children}</p>
                  ),
                },
                marks: {
                  link: ({ children, value }) => (
                    <a
                      href={value.href}
                      className="text-teal-400 hover:text-teal-300"
                    >
                      {children}
                    </a>
                  ),
                },
              }}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: params.slug },
    options
  );

  return {
    title: post.title,
    description: post.excerpt || "",
  };
}
