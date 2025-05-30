import { SeoProps } from "@/types/common";
import Head from "next/head";

export const SeoHead = ({
  title,
  description,
  keywords,
  canonical,
  openGraph,
}: SeoProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <link rel="canonical" href={canonical} />

    <meta property="og:title" content={openGraph.title} />
    <meta property="og:description" content={openGraph.description} />
    <meta property="og:type" content={openGraph.type} />
    <meta property="og:url" content={openGraph.url} />
    {openGraph.images.map((img, i) => (
      <meta key={i} property="og:image" content={img.url} />
    ))}
  </Head>
);
