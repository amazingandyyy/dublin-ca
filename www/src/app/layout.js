import Script from 'next/script'
import './globals.scss'

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
const CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID

export const metadata = {
  metadataBase: new URL('https://dublin.amazyyy.com'),
  alternates: {
    'shortcut icon': '/icons/favicon.ico',
    'mask-icon': {
      href: '/icons/safari-pinned-tab.svg',
      color: '#2AA34A'
    },
    manifest: '/icons/site.webmanifest'
  },
  openGraph: {
    title: 'Dublin Threads',
    description: 'Built by a software engineer living in Dublin, California. Dublin threads is a place for local updates on developments and public meetings. Open discussion on projects and engage community to join the meetings. Updated every 15 minutes.',
    url: 'https://dublin.amazyyy.com',
    siteName: 'DublinThreads',
    themeColor: '#2AA34A',
    images: [
      {
        url: '/images/hero.png',
        width: 1148,
        height: 437
      }
    ],
    locale: 'en_US'
  }
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://dublin.amazyyy.com/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://dublin.amazyyy.com/icons/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#0D8100" />
        <meta
          name="msapplication-config"
          content="https://dublin.amazyyy.com/icons/browserconfig.xml"
        />
        <Script
          strategy="beforeInteractive"
          id="gh4-1"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          strategy="beforeInteractive"
          id="gh4-2"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){
                dataLayer.push(arguments)
              }
              gtag('js', new Date());
    
              gtag('config', '${GA_TRACKING_ID}');
            `
          }}
        />
        <Script
          strategy="beforeInteractive"
          id="crisp-1"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];window.CRISP_WEBSITE_ID="${CRISP_WEBSITE_ID}";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();
            `
          }}
        />
      </head>
      <body className="antialiased pt-12 sm:pt-8 bg-[#F3F2EE]">
        {children}
      </body>
    </html>
  )
}
