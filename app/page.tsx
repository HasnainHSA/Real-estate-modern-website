// link tag
import Link from "next/link";

// Image tag
import Image from "next/image";
import logo from "./images/logo.png";
import white_logo from "./images/logo-white.png";

// css stylesheet
import "./globals.css";

// icons
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";




export default function Home() {
  return (
    <div>
      <div className="home-page">
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

        <div className="hero-cont">
          <div className="hero-text">
            <h1 className="hero-h1">Project</h1>
            <h2 className="hero-h2">Nurtown</h2>

            <div className="third-hero-cont">
              <div className="hero-text-btns">
                <div className="h-arrow-left">
                  <IoIosArrowRoundBack />
                </div>
                <div className="h-arrow-right">
                  <IoIosArrowRoundForward />
                </div>
              </div>
              <div className="hero-line"></div>
            </div>

            <p className="hero-para">01 / 02</p>
          </div>
          <div className="image-text">
            <button className="hero-img-btn">
              View Project <IoIosArrowRoundForward className="hero-arrow-btn" />
            </button>
          </div>
        </div>

        <div className="about-cont">
          <div className="about-image">
            <div className="about-col-1">
              <div className="about-row-1"></div>
              <div className="about-row-2"></div>
            </div>
            <div className="about-col-2"></div>
          </div>

          <div className="about-text">
            <div className="about-upper-text">
              <h1 className="about-h1">About</h1>
              <p className="about-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <button className="about-btn">
              Read More <IoIosArrowRoundForward className="about-arrow-btn" />
            </button>
          </div>
        </div>

        <div className="mission-cont">
          <h1 className="m-h1">Main Focus/Mission Statement</h1>
          <div className="m-inner">
            <div className="m-row-1">
              <h1>1</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas consequuntur, ex necessitatibus laborum quaerat rem
                eaque. Blanditiis voluptatibus iusto fuga enim quidem nam omnis
                ipsam natus optio cum et dolor quas alias veritatis distinctio,
                sit illo ipsa hic vel mollitia nisi tempore{" "}
              </p>
            </div>
            <div className="m-row-2">
              <h1>2</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas consequuntur, ex necessitatibus laborum quaerat rem
                eaque. Blanditiis voluptatibus iusto fuga enim quidem nam omnis
                ipsam natus optio cum et dolor quas alias veritatis distinctio,
                sit illo ipsa hic vel mollitia nisi tempore{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="project-cont">
          <h1 className="p-h1">Our Projects</h1>
          <div className="project-inner">
            <div className="p-row-1">
              <div className="p1-col-1">
                <h1 className="col-head">
                  {" "}
                  Sample <br /> Project
                </h1>
                <button className="pro-btn">
                  View more <IoIosArrowRoundForward className="pro-btn-icon" />
                </button>
              </div>
              <div className="p1-col-2"></div>
            </div>

            <div className="p-row-2">
              <div className="p2-col-1"></div>
              <div className="p2-col-2"></div>
              <div className="p2-col-3"></div>
            </div>

            <div className="p-row-3">
              <button className="p-btn">
                All projects
                <IoIosArrowRoundForward className="p-arrow-btn" />
              </button>
            </div>
          </div>
        </div>

        <div className="contact-cont">
          <h1 className="c-h1">Our Projects</h1>
          <div className="contact-inner">
            <div className="c-form">
              <input type="text" placeholder="Name" />
              <input type="number" placeholder="Phone Number" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Interested" />
              <textarea placeholder="Message"></textarea>
            </div>
            <div className="c-image"></div>
          </div>

          <button className="c-btn">
            Send email <IoIosArrowRoundForward className="c-arrow-btn" />
          </button>
        </div>
      </div>



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
        <span className="rights-text">© 2021 All Rights Reserved</span>
      </footer>

      
    </div>
  );
}
