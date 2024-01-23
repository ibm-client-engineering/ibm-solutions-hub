import './globals.scss';
import { Providers } from './providers';

export const metadata = {
  title: 'Solutions Hub',
  description: 'IBM Client Engineering Solutions Hub',
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
