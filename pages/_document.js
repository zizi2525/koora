import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head />
      <body className="min-h-screen bg-zinc-200 dark:bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
