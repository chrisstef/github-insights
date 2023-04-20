import React from "react";
import NextHead from "next/head";

const defaultTitle = "Github Insights";
const defaultDescription =
  "A web application to inspect your GitHub Profile Stats.";
const defaultOGURL = "";
const defaultOGImage = "";

const Head = props => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title || defaultTitle}</title>
      <meta
        name="description"
        content={props.description || defaultDescription}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#743ad5" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || defaultTitle} />
      <meta property="og:image" content={props.ogImage || defaultOGImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:description"
        content={props.description || defaultDescription}
      />
    </NextHead>
  );
};

export default Head;
