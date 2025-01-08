import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'IBM Solutions Hub',
  description: 'IBM Solutions Hub',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
