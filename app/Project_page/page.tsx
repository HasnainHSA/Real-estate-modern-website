import Header from "../components/header";
import './project.css'
export default function Project() {
    return (
      <div className="project">
        <Header/>

        <div className="project-inner">
        <h1 className="p-h1">Our</h1>
            <h2 className="p-h2">Project</h2>
            <div className="p-line"></div>

            <div className="project-card-cont">
              <div className="project-card">
                <div className="p-card-image"></div>
                <div className="p-card-text">
                  <h2>Sample Project</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button></button>
                </div>
              </div>
            </div>

        </div>
      </div>
    )
  }
  