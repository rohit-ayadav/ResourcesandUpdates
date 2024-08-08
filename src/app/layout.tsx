import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import './globals.css'

export const metadata: Metadata = {
  title: 'Resources and Updates',
  description: 'Our go-to community for job and internship opportunities in CSE Field',
}
// export const metadata: Metadata = {
//   title: 'Resources and Updates',
//   description: 'Our go-to community for job and internship opportunities in CSE Field',
//   openGraph: {
//     title: 'Resources and Updates',
//     description: 'Our go-to community for job and internship opportunities in CSE Field',
//     url: 'https://www.resourcesandcarrier.online', // Update with your site’s URL
//     siteName: 'Resources and Updates',
//     images: [
//       {
//         url: 'https://i.ibb.co/m9qfTtX', // Your image URL
//         width: 1200,
//         height: 630,
//         alt: 'Community image for Resources and Updates',
//       },
//     ],
//   },
//   twitter: {
//     card: 'summary_large_image', // For larger image preview
//     title: 'Resources and Updates',
//     description: 'Our go-to community for job and internship opportunities in CSE Field',
//     images: [
//       'https://i.ibb.co/m9qfTtX', // Your image URL
//     ],
//   },
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}