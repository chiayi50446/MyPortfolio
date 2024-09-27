// Name: Chiayi Lin
// StudentID: 301448962
// Date: 09.27.24
// File name: Contact.jsx
// Section: COMP229 SEC 010

// This is the Contact.jsx page for my portfolio of web development work. It include my contact information
// and a short interactive form that allows the user to send a message to me.

import { useState } from 'react'
import bldg from '../src/assets/image/centennialplace_bldg.jpg';
import UserInfo from './UserInfo';
import Button from 'react-bootstrap/Button';


export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [modalShow, setModalShow] = useState(false);
    return (
      <>
      <section className="full-width background-dark">
            <div className="contact-left">
              <img src={bldg} className="contact-image" alt="bldg" />
            </div>
            <div className="contact-right text-center">
              <div className="padding-2x">
                <i className="icon-sli-location-pin text-white text-size-30 center"></i>
                <h2 className="text-size-20 margin-bottom-0 text-white">Company Address</h2>                
                <p>937 Progress Avn</p>
                <p>Scarborough</p>
                <p>Ontario</p>
                <i className="icon-sli-envelope text-white text-size-30 center margin-top-20"></i>
                <h2 className="text-size-20 margin-bottom-0 text-white">E-mail</h2>                
                <a className="text-primary-hover" href="mailto:contact@sampledomain.com">clin134@my.centennialcollege.ca</a>
                
                <i className="icon-sli-earphones-alt text-white text-size-30 center margin-top-20"></i>
                <h2 className="text-size-20 margin-bottom-0 text-white">Phone Numbers</h2>                
                <p>0800 4521 800 50</p>
              </div>
            </div>
          </section>
        
    <section className="contact_section layout_padding">
      <div className="container">
        <div className="heading_container justify-content-center">
          <h2 className="">
            Contact Me
          </h2>
        </div>
  
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <form action="">
              <div>
                <input type="text" value={firstName} onChange={() => setFirstName(event.target.value)} placeholder="FirstName" />
              </div>
              <div>
                <input type="text" value={lastName} onChange={() => setLastName(event.target.value)} placeholder="LastName" />
              </div>
              <div>
                <input type="email" value={email} onChange={() => setEmail(event.target.value)} placeholder="Email" />
              </div>
              <div>
                <input type="text" value={phone} onChange={() => setPhone(event.target.value)} placeholder="Pone Number" />
              </div>
              <div>
                <input type="text" value={message} onChange={() => setMessage(event.target.value)} className="message-box" placeholder="Message" />
              </div>
              <div className="d-flex  mt-4 ">
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  SEND
                </Button>
                <UserInfo
                  name={firstName+" "+lastName}
                  phone={phone}
                  email={email}
                  message={message}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
    )
  }