// Name: Chiayi Lin
// StudentID: 301448962
// Date: 09.27.24
// File name: About.jsx
// Section: COMP229 SEC 010

// This is the About.jsx page for my portfolio of web development work. It include a link to a PDF
// and a short paragraph about me.

import avatar from '../src/assets/image/avatar.jpg'; 
import Button from 'react-bootstrap/Button';

export default function About() {
    return (
      <>
      <section className="about_section ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-7">
              <div className="img-box">
                <img src={avatar} width={200} height={200} alt="avatar" />
              </div>
              <p className='name-box'>Chia-Yi Lin</p>
              <Button variant="outline-info" 
                      onClick={() => {
                        window.open("https://www.cake.me/s--62IWtpmmUvi4I6HnBe_fZw--/angel05446", "_blank");
                      }}> My Resume
              </Button>
            </div>
            <div className="col-md-5 col-xl-5">
              <div className="detail_box">
                <div className="heading_container justify-content-end">
                  <h2>
                    About Me
                  </h2>
                </div>
                <p>
                  Hello! I’m a Taiwanese computer science graduate with a passion for programming, particularly in C#. 
                </p>
                <p>
                  As an introvert, I find joy in diving deep into code and solving complex problems. 
                </p>
                <p>
                  I enjoy working on projects that challenge my skills and allow me to learn new technologies. 
                </p>
              </div>
            </div>
    
          </div>
        </div>
      </section>
      </>
    )
  }