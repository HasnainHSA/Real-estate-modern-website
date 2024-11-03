// Image tag
import Image from "next/image";
import white_logo from "../images/logo-white.png";

// icons
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer>
    <div className="footer-inner">
      <Image
        src={white_logo}
        alt="logo_white_img"
        className="logo_white_img"
      />

      <div className="footerlink-1">
        <h4>Information</h4>
        <span>Main</span>
        <span>Gallery</span>
        <span>Projects</span>
        <span>Certification</span>
        <span>Contact</span>
      </div>

      <div className="footerlink-2">
        <h4>Contact</h4>
        <div className="f-con-icon">
          <IoLocationOutline className="f-icon" />
          1234 Sample Street <br /> Austin Texas 78704
        </div>
        <div className="f-con-icon">
          <LuPhoneCall className="f-icon" />7 (701) 77 76 811
        </div>
        <div className="f-con-icon">
          <MdOutlineMail className="f-icon" />
          Galym.sultanov@mail.ru
        </div>
      </div>

      <div className="footerlink-3">
        <h4>Social Media</h4>
        <div className="social-icons">
          <FaTwitter />
          <FaFacebookF />
          <FaLinkedin />
          <FaPinterestP />
        </div>
      </div>
    </div>

    <div className="f-line"></div>
    <span className="rights-text">© 2024 All Rights Reserved</span>
  </footer>
  )
}
