import './globals.css'
import Providers from './providers'
import ScrollToTop from '../components/ScrollToTop'

export const metadata = {
  title: 'Healthy',
  description: 'Healthy starter project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        {/* Noto Sans JP from Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <Providers>
          {children}
          {/* ScrollToTop is client component, so it needs to be used after Providers */}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}
