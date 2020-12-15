import WebsitePage from "components/WebsitePage/WebsitePage";
import customAxios from 'utils/customAxios';
import Head from "next/head"
import { Theme } from "../src/styles/Theme.js";

const WebsitePages = (props) => {
  if (props?.data?.pageId) {
    return (
      <Theme {...props.siteSettings}>
        <Head>
          <link rel="icon" href={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${props.siteSettings.favicon}`} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald"></link>
        </Head>
        <WebsitePage {...props.data} />
      </Theme>
    )
  } else {
    return (
      <span>Not found page</span>
    )
  }
};

export async function getServerSideProps({ params }) {
  const {ok, data} = await customAxios.post(`/pages/detail/slug`, {
    slug: params?.slug?.join('/')
  });
  const response = await customAxios.get(`/module_site_setting/1`);
  const h1FontFormats = response.data.h1FontFormat.split(',');
  const h1Bold = h1FontFormats.includes('bold') ? 'bold' : 'unset';
  const h1Italic = h1FontFormats.includes('italic') ? 'italic' : 'unset';
  const h1Underline = h1FontFormats.includes('underline') ? 'underline' : 'unset';

  const h2FontFormats = response.data.h2FontFormat.split(',');
  const h2Bold = h2FontFormats.includes('bold') ? 'bold' : 'unset';
  const h2Italic = h2FontFormats.includes('italic') ? 'italic' : 'unset';
  const h2Underline = h2FontFormats.includes('underline') ? 'underline' : 'unset';

  const h3FontFormats = response.data.h3FontFormat.split(',');
  const h3Bold = h3FontFormats.includes('bold') ? 'bold' : 'unset';
  const h3Italic = h3FontFormats.includes('italic') ? 'italic' : 'unset';
  const h3Underline = h3FontFormats.includes('underline') ? 'underline' : 'unset';

  const h4FontFormats = response.data.h4FontFormat.split(',');
  const h4Bold = h4FontFormats.includes('bold') ? 'bold' : 'unset';
  const h4Italic = h4FontFormats.includes('italic') ? 'italic' : 'unset';
  const h4Underline = h4FontFormats.includes('underline') ? 'underline' : 'unset';

  // const h5FontFormats = response.data.h5FontFormat.split(',');
  // const h5Bold = h5FontFormats.includes('bold') ? 'bold' : 'unset';
  // const h5Italic = h5FontFormats.includes('italic') ? 'italic' : 'unset';
  // const h5Underline = h5FontFormats.includes('underline') ? 'underline' : 'unset';

  // const h6FontFormats = response.data.h6FontFormat.split(',');
  // const h6Bold = h6FontFormats.includes('bold') ? 'bold' : 'unset';
  // const h6Italic = h6FontFormats.includes('italic') ? 'italic' : 'unset';
  // const h6Underline = h6FontFormats.includes('underline') ? 'underline' : 'unset';

  // const normalFontFormats = response.data.normalFontFormat.split(',');
  // const normalBold = normalFontFormats.includes('bold') ? 'bold' : 'unset';
  // const normalItalic = normalFontFormats.includes('italic') ? 'italic' : 'unset';
  // const normalUnderline = normalFontFormats.includes('underline') ? 'underline' : 'unset';

  const siteSettings = {
    ...response.data, 
    h1Bold: h1Bold,
    h1Italic: h1Italic,
    h1Underline: h1Underline,
    h2Bold: h2Bold,
    h2Italic: h2Italic,
    h2Underline: h2Underline,
    h3Bold: h3Bold,
    h3Italic: h3Italic,
    h3Underline: h3Underline,
    h4Bold: h4Bold,
    h4Italic: h4Italic,
    h4Underline: h4Underline,
    // h5Bold: h5Bold,
    // h5Italic: h5Italic,
    // h5Underline: h5Underline,
    // h6Bold: h6Bold,
    // h6Italic: h6Italic,
    // h6Underline: h6Underline,
    // normalBold: normalBold,
    // normalItalic: normalItalic,
    // normalUnderline: normalUnderline,
  };

  if (ok) {
    return {
      props: { data: data, siteSettings: siteSettings },
    }
  }

  return { props: { } };
}
/*
export async function getStaticProps({ params }) {
  console.log(params);

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {},
  }
}

export async function getStaticPaths() {
  const {ok, data} = await customAxios.get(`/pages/slugs`);
  let paths = [];
  if (ok) {
    paths = data.map((slug) => {
      return {
        params: {
          slug: slug.slug.split('/')
        }
      }
    });
  }

  return {
    paths: paths,
    fallback: false,
  };
}
*/
export default WebsitePages;