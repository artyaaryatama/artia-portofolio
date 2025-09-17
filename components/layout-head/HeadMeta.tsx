import Head from "next/head";

export default function HeadMeta(){
  return(
    <Head>
      <title>Artia Aryatama | Frontend Developer</title>
      <meta name="description" content="A collection of my work as a frontend developer, from landing pages to web applications." />

      <link rel="icon" type="image/png" sizes="16x16" href="https://artyaaryatama.me/meta-icons/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://artyaaryatama.me/meta-icons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="https://artyaaryatama.me/meta-icons/favicon-48x48.png" />
      <link rel="icon" type="image/png" sizes="72x72" href="https://artyaaryatama.me/meta-icons/favicon-72x72.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="https://artyaaryatama.me/meta-icons/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="144x144" href="https://artyaaryatama.me/meta-icons/android-icon-144x144.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="https://artyaaryatama.me/meta-icons/android-icon-192x192.png" />

      <link rel="apple-touch-icon" sizes="57x57" href="https://artyaaryatama.me/meta-icons/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="https://artyaaryatama.me/meta-icons/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="https://artyaaryatama.me/meta-icons/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="https://artyaaryatama.me/meta-icons/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="https://artyaaryatama.me/meta-icons/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="https://artyaaryatama.me/meta-icons/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="https://artyaaryatama.me/meta-icons/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="https://artyaaryatama.me/meta-icons/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="https://artyaaryatama.me/meta-icons/apple-icon-180x180.png" />

      <link rel="manifest" href="https://artyaaryatama.me/meta-icons/manifest.json" />
      <meta name="msapplication-TileImage" content="https://artyaaryatama.me/meta-icons/ms-icon-144x144.png" />
      <meta name="msapplication-TileColor" content="#ffffff" />

      <meta property="og:title" content="Artia Aryatama | Frontend Developer" />
      <meta property="og:description" content="A collection of my work as a frontend developer, from landing pages to web applications." />
      <meta property="og:url" content="https://artyaaryatama.me" />
      <meta property="og:site_name" content="Artia Aryatama | Frontend Developer" />
      <meta property="og:image" content="https://artyaaryatama.me/meta-icons/og2.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Artia Aryatama" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Artia Aryatama | Frontend Developer" />
      <meta name="twitter:description" content="A collection of my work as a frontend developer, from landing pages to web applications." />
      <meta name="twitter:image" content="https://artyaaryatama.me/meta-icons/og2.png" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "name": "Artia Aryatama",
                "url": "https://artyaaryatama.me",
                "logo": "https://artyaaryatama.me/meta-icons/android-icon-192x192.png",
                "sameAs": [
                  "https://github.com/artyaaryatama",
                  "https://www.linkedin.com/in/artia-aryatama"
                ]
              },
              {
                "@type": "Person",
                "name": "Artia Aryatama",
                "url": "https://artyaaryatama.me",
                "image": "https://artyaaryatama.me/meta-icons/android-icon-192x192.png",
                "jobTitle": "Frontend Developer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Freelance"
                },
                "sameAs": [
                  "https://github.com/artyaaryatama",
                  "https://www.linkedin.com/in/artia-aryatama"
                ]
              }
            ]
          }),
        }}
      />
    </Head>
  )
}   