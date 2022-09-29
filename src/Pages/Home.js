import React from "react";
import "./Home.css";
import profileimg from "../assets/img/profileimg.png";
<<<<<<< HEAD
import Pdf from "../assets/pdf/AbdulAziz.pdf";
=======
import Pdf from "../assets/pdf/poojagarva.pdf";
>>>>>>> 4af5fd1eaecdff6edce4658584ef896b26e48bee
import { Link } from "react-router-dom";
import Linkedinicon from "../assets/img/socialicons/linkedin.png";
import Instagramicon from "../assets/img/socialicons/instagram.png";
import Githubicon from "../assets/img/socialicons/github.png";
import MailIcon from "../assets/img/socialicons/email.png";

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <div className="imgsec">
              <img
                src={profileimg}
                data-aos="flip-right"
                alt="Abdul Aziz"
                className="img-fluid"
              />
              <div className="socialmedia">
                <a
<<<<<<< HEAD
                  href="https://www.linkedin.com/in/m-a-aziz-ahmed-adnan-404492180/"
=======
                  href="https://www.linkedin.com/in/poojagarva/"
>>>>>>> 4af5fd1eaecdff6edce4658584ef896b26e48bee
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Linkedinicon}
                    alt="linkedin"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
<<<<<<< HEAD
                  href="https://github.com/userisaziz"
=======
                  href="https://github.com/poojagarva28"
>>>>>>> 4af5fd1eaecdff6edce4658584ef896b26e48bee
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Githubicon}
                    alt="github"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
<<<<<<< HEAD
                  href="https://www.instagram.com/user_is_aziz/"
=======
                  href="https://www.instagram.com/placesiwandered/"
>>>>>>> 4af5fd1eaecdff6edce4658584ef896b26e48bee
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={Instagramicon}
                    alt="instagram"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
                <a
<<<<<<< HEAD
                  href="mailto:azizadnan370@gmail.com"
=======
                  href="mailto:poojagarva123@gmail.com"
>>>>>>> 4af5fd1eaecdff6edce4658584ef896b26e48bee
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={MailIcon}
                    alt="email"
                    data-aos="fade-right"
                    data-aos-delay="1000"
                  />
                </a>
              </div>
              <div className="bgblack" data-aos="fade-right"></div>
            </div>
          </div>
          <div className="col-sm-5 offset-sm-2">
            <div className="rightcontent" data-aos="fade-right">
              <h1> Abdul Aziz </h1>
              <h2>Full Stack Developer</h2>
              <br />
              <div className="row">
                <div className="col-sm-4 col-6">
                  <a href={Pdf} target="_blank" rel="noreferrer">
                    <button type="button" className="btn btn-primary">
                      Resume
                    </button>
                  </a>
                </div>
                <div className="col-sm-5 col-6">
                  <Link to="/contact">
                    <button type="button" className="btn btn-primary">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
