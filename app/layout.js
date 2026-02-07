import './globals.css'

export const metadata = {
  title: 'Figure Skating Training Planner',
  description: 'AI-powered personalized training plans for figure skaters',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
