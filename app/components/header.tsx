// link tag
import Link from "next/link";

// image
import Image from "next/image";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <div className="header">
          <div className="logo">
            <Image src={logo} alt="logo_img" className="logo_img" />
          </div>
          <div className="navlinks">
            <Link href={"./"} className="link">
              Main
            </Link>
            <Link href={"./Gallery_page"} className="link">
              Gallery
            </Link>
            <Link href={"./Project_page"} className="link">
              Projects
            </Link>
            <Link href={"./Certification_page"} className="link">
              Certification
            </Link>
            <Link href={"./Contact_page"} className="link">
              Contacts
            </Link>
          </div>
        </div>
  )
}
