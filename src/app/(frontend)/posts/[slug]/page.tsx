// import { sanityFetch } from "@/sanity/lib/live";
// import { POST_QUERY } from "@/sanity/lib/queries";
// import { notFound } from "next/navigation";
// import Link from "next/link";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { PortableText } from "next-sanity";
// import { components } from "@/sanity/portableTextComponents";

// export default async function Page({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { data: post } = await sanityFetch({
//     query: POST_QUERY,
//     params: await params,
//   });

//   if (!post) {
//     notFound();
//   }

//   return (
//     <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
//       {post?.mainImage ? (
//         <Image
//           className="w-full aspect-[800/300]"
//           src={urlFor(post.mainImage)
//             .width(800)
//             .height(300)
//             .quality(80)
//             .auto("format")
//             .url()}
//           alt={post?.mainImage?.alt || ""}
//           width="800"
//           height="300"
//         />
//       ) : null}
//       <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
//       {post?.body ? (
//         <div className="prose text-white">
//           <PortableText value={post.body} components={components} />
//         </div>
//       ) : null}
//       <hr />
//       <Link href="/posts">&larr; Return to index</Link>
//     </main>
//   );
// }
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { Post } from "@/components/Post";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Post {...post} />
    </main>
  );
}
