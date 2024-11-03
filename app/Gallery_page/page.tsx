import Footer from "../components/footer";
import Header from "../components/header";
import './gallery.css'

// icons
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function page() {
  return (
    <div>
    <div className="gallery">
        <Header/>

        <div className="gallery-inner">
            <h1 className="g-h1">Photo</h1>
            <h2 className="g-h2">Gallery</h2>
            <div className="g-line"></div>
            <div className="g-grid">
                <div className="g-row-1 slit-in-vertical">
                    <div className="row-1-col1"></div>
                    <div className="row-1-col2"></div>
                    <div className="row-1-col3"></div>
                    <div className="row-1-col4"></div>
                    <div className="row-1-col5"></div>
                </div>
                <div className="g-row-2 slit-in-vertical">
                    <div className="row-2-col1"></div>
                    <div className="row-2-col2"></div>
                    <div className="row-2-col3"></div>
                    <div className="row-2-col4"></div>
                    <div className="row-2-col5"></div>
                </div>
            </div>

            <div className="pagination">
                <div className="page-text">01 / 05</div>
                <div className="arrows">
                <div className="g-arrow-left ">
                  <IoIosArrowRoundBack />
                </div>
                <div className="g-arrow-right">
                  <IoIosArrowRoundForward />
                </div>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
    </div>
  )
}
