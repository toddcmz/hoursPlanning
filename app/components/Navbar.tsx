import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="devNav">
      <Link href= '/'>Home</Link>
      <Link href='/organization'> Organization Details </Link>
      <Link href='/plan'>Hours Planning</Link>
    </nav>
  )
}
