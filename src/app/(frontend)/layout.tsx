import React from 'react'
import './styles.css'
import Nav from './components/Nav'

export const metadata = {
  description: 'Mario Hodzelmans — AI, Blog, Tools & CV',
  title: 'Mario Hodzelmans',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="nl">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  )
}
