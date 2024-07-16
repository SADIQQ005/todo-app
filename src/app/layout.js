import { Inter } from 'next/font/google';
 
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Example App',
  description: 'A simple app to explain Next.js',
  icons: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🤑</text></svg>"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
