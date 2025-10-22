import { keywords } from '@/contants';
import useTrans from '@/hooks/useTrans';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';

type Props = {
  title?: string;
};

const Meta = ({ title }: Props) => {
  const trans = useTrans();
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>{title ?? trans.meta.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="1 days" />
        <meta name="color-scheme" content="dark light" />
        <meta itemProp="name" content={trans.home.title} />
        <meta name="description" content={trans.meta.description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="author" content="Admin" />
        <meta property="og:locale" content={router.locale} />
        <meta itemProp="image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/thumb.png`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={trans.meta.twitterTitle} />
        <meta name="twitter:description" content={trans.meta.twitterDescription} />
        <meta name="twitter:image:src" content={`${process.env.NEXT_PUBLIC_DOMAIN}/thumb.png`} />
        <meta property="og:title" content={trans.meta.ogTitle} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}/thumb.png`} />
        <meta property="og:description" content={trans.meta.ogDescription} />
        <meta property="og:site_name" content={trans.meta.ogSiteName} />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href={`${process.env.NEXT_PUBLIC_DOMAIN}/snapthumb.png`}
        />
        <link rel="shortcut icon" href="/favicon.webp" />
        <meta name="google" content="notranslate" />
        <link rel="alternate" hrefLang="x-default" href={process.env.NEXT_PUBLIC_DOMAIN} />
        <link rel="alternate" hrefLang="vi" href={`${process.env.NEXT_PUBLIC_DOMAIN}`} />
        <link rel="alternate" hrefLang="en" href={`${process.env.NEXT_PUBLIC_DOMAIN}/en`} />
        <link rel="alternate" hrefLang="in" href={`${process.env.NEXT_PUBLIC_DOMAIN}/in`} />
        <link rel="alternate" hrefLang="br" href={`${process.env.NEXT_PUBLIC_DOMAIN}/br`} />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_DOMAIN}/${router.locale}`} />
      </Head>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        strategy="afterInteractive"
        data-ad-client="ca-pub-1909271227447970"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Meta;