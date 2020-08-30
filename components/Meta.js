import Head from 'next/head'
const Meta = (props) => (
  <Head>
    <title>{props.title}</title>
    <meta name="description" content={props.desc} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={props.title} />
    <meta name="og:description" property="og:description" content={props.desc} />
    <meta property="og:site_name" content="Tech.Viet" />
    <meta property="og:url" content={`${props.canonical}`} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.desc} />
    <meta name="twitter:site" content="@redeio" />
    <meta name="twitter:creator" content="@redeio" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="HandheldFriendly" content="true" />
    <meta name="theme-color" content="#333333" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" type="image/png" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/favicon.ico" />
    {
      props.css &&
      <link rel="stylesheet" href={`${props.css}`} />
    }
    {
      props.image ? (
        <meta property="og:image" content={`${props.image}`} />
      ) : (
          <meta property="og:image" content="/vietnam.jpg" />
        )
    }
    {
      props.image ? (
        <meta name="twitter:image" content={`${props.image}`} />
      ) : (
          <meta name="twitter:image" content="/vietnam.jpg" />
        )
    }
    {
      props.canonical &&
      <link rel="canonical" href={`${props.canonical}`} />
    }
    {
      props.js &&
      <script type="text/javascript" src={`${props.js}`}></script>
    }
  </Head>
)
export default Meta