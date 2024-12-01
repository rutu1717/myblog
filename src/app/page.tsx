import Link from 'next/link'
import {type SanityDocument} from 'next-sanity'
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import Footer from '@/components/Footer'
import Navbar from '@/components/Navabr'
import {client} from '@/sanity/client'

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title,image,slug, publishedAt}`

const options = {next: {revalidate: 30}}
const { projectId, dataset } = client.config();

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)
  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;
  return (
    <>
      <Navbar />
      <main className="container mx-auto min-h-screen max-w-3xl p-8 bg-gray-900 text-gray-100">
        <div>
          <h1 className="text-4xl font-bold mb-8 text-teal-300">Blogs</h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <li
                className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
                key={post._id}
              >
                <img
                  src={urlFor(post.image)?.width(550).height(310).url()}
                  alt={post.title}
                  className="aspect-video object-cover"
                  width="550"
                  height="310"
                />
                <Link href={`/${post.slug.current}`} className="block p-4">
                  <h2 className="text-xl font-semibold mb-2 text-teal-300">{post.title}</h2>
                  <p className="text-gray-400">{new Date(post.publishedAt).toLocaleDateString()}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}