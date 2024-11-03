import Footer from "../components/footer";
import Header from "../components/header";
import './contact.css'

export default function Contact() {
  return (
    <div>
    <div className="contact">
          <Header/>

          <div className="contact-inner">
            <div className="contact_text">
                <h1 className="c-h1">Contact
                    <span className="c-h2">Information</span>
                </h1>


                <div className="c-s-text">
                    <span className="c-text-1">Company name</span>
                    <p>1234 Sample Street Austin Texas 76401</p>
                </div>

                <span className="c-text-2">512.333.2222</span>

                <span className="c-text-3">sampleemail@gmail.com</span>

                <button className="c-btn">Contact us</button>

            </div>
            <div className="contact_map">
                
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.2168206368187!2d67.0241085143431!3d24.850981741051523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e75a28531d1%3A0x412558657f5ff4a8!2sGovernor%20House%20Karachi!5e1!3m2!1sen!2s!4v1730516963817!5m2!1sen!2s" className="c-map" loading="eager"></iframe>
            </div>
          </div>

    </div>

    <Footer/>

    </div>
  )
}
