import Link from "next/link"
import Image from "next/image"
import Logo from "./hoursPlanIcon.png"

export default function Navbar() {
  return (
    <nav className="devNav">
      <div className="navLeft">
        <Image 
          src={Logo}
          alt="Ours Logo"
          width={70}
          quality={100}
          placeholder="blur"
        />
        <h1 className="navLinkItem">A Plan of Ours</h1>
      </div>
      <div className="navRight">
        <Link className="navLinkItem" href= '/'>Home</Link>
        <Link className="navLinkItem" href='/organization'> Org Summary </Link>
        <Link className="navLinkItem" href='/organization/createOrg'> Create Organization </Link>
        <Link className="navLinkItem" href='/plan'>Hours Planning</Link>
      </div>
    </nav>
  )
}
