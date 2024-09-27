// Name: Chiayi Lin
// StudentID: 301448962
// Date: 09.27.24
// File name: Home.jsx
// Section: COMP229 SEC 010

// This is the Home.jsx page for my portfolio of web development work. It includes welcome message, 
// Mission Statement and button that allows the user to redirect to About Me Page

import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
    <section className="position-relative">
      <div className="container">
        <div className="row">
          <div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                  <div className="detail_box">
                    <h2>
                      Welcome
                    </h2>
                    <h1>
                      Chiayi's Portfolio
                    </h1>
                    <p>
                    "To find happiness and fulfillment in everything I do at work."
                    </p>
                    <div>
                      <Link to="/MyPortfolio/About">About me</Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    </>
  )
}