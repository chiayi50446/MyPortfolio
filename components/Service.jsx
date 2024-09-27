// Name: Chiayi Lin
// StudentID: 301448962
// Date: 09.27.24
// File name: Service.jsx
// Section: COMP229 SEC 010

// This is the Service.jsx page for my portfolio of web development work. It include a short list of 
// services I offer.

import Card from 'react-bootstrap/Card';
import generalPr from '../src/assets/image/generalPr.jpg'; 
import webDev from '../src/assets/image/webDev.jpg'; 
import mobileAp from '../src/assets/image/mobileAp.jpg'; 
export default function Service() {
    return (
      <div className="project-card">
      <Card style={{ width: '18rem', marginLeft: '5px' }}>
        <Card.Img variant="top" src={generalPr} />
        <Card.Body>
          <Card.Title>general programming</Card.Title>
          
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', marginLeft: '5px' }}>
      <Card.Img variant="top" src={webDev} />
      <Card.Body>
        <Card.Title>web development</Card.Title>
        
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', marginLeft: '5px' }}>
    <Card.Img variant="top" src={mobileAp} />
    <Card.Body>
      <Card.Title>mobile apps</Card.Title>
      
    </Card.Body>
  </Card>
  </div>
    )
  }