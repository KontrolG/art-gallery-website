import React from "react";
import Head from "next/head";
import { SHARED_IMAGES_PATH } from "@/constants/paths";
import { DESCRIPTION, TITLE } from "@/constants/data";

function CustomHead({
  title = TITLE,
  description = DESCRIPTION,
  image = `${SHARED_IMAGES_PATH}/og-image.jpg`,
  children
}) {
  return (
    <Head>
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {children}
    </Head>
  );
}

export default CustomHead;
