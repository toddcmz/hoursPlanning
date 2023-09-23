import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata:Metadata = {
  title: "Plan/Ours | Home"
}

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>This page will give a summary of org staff and projects</p>
    </main>
  )
}
