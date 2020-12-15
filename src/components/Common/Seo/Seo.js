import Head from 'next/head';

const Seo = (props) => {
  return (
    <Head>
      {props?.title && <title>{props?.title}</title>}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {props?.description && <meta name="description" content={props.description} />}
      {props?.featuredImage?.image && 
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_ASSETS_URL}/${props.featuredImage.image}`}
        />
      }
      <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
    </Head>
  )
};

export default Seo;