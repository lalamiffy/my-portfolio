import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://lalamiffy.github.io/nextjs-portfolio-main/'),
  title: 'Jianna Huang | Cloud & Software',
  description:
    'Portfolio of Jianna Huang, a cloud support professional with experience in Windows, Linux, networking, cloud infrastructure and software development.',
  keywords: [
    'Cloud Engineer',
    'Software Developer',
    'Technical Support Engineer',
    'Windows Server',
    'Linux',
    'Networking',
    'AWS',
    'Python',
    'C#',
    '.NET',
    'JavaScript',
    'React',
  ],
  authors: [{ name: 'Jianna Huang' }],
  creator: 'Jianna Huang',
  alternates: {
    canonical: 'https://lalamiffy.github.io/nextjs-portfolio-main/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lalamiffy.github.io/nextjs-portfolio-main/',
    title: 'Jianna Huang | Cloud & Software',
    description:
      'Cloud support, infrastructure and software development portfolio.',
    siteName: 'Jianna Huang | Cloud & Software',
    images: [
      {
        url: 'https://lalamiffy.github.io/nextjs-portfolio-main/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Jianna Huang cloud and software portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jianna Huang | Cloud & Software',
    description:
      'Cloud support, infrastructure and software development portfolio.',
    images: [
      'https://lalamiffy.github.io/nextjs-portfolio-main/images/og-image.svg',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${basePath}/favicon.ico`} sizes="any" />
        <link rel="icon" href={`${basePath}/favicon.svg`} type="image/svg+xml" />
        <link rel="apple-touch-icon" href={`${basePath}/favicon.svg`} />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
