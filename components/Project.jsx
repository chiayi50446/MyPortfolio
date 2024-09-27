// Name: Chiayi Lin
// StudentID: 301448962
// Date: 09.27.24
// File name: Project.jsx
// Section: COMP229 SEC 010

// This is the Project.jsx page for my portfolio of web development work. It include the three project
// I am working on, each including image and a short description of your role and the outcome.

import Card from 'react-bootstrap/Card';
import systemDesignDiagram from '../src/assets/image/cfd.jpg'; 
import portfolioHomePage from '../src/assets/image/portfolio.png'; 
import gameDesignLogo from '../src/assets/image/logo.jpg'; 

export default function Project() {
    return (
    <div className="project-card">
      <Card style={{ width: '18rem', marginLeft: '5px' }}>
        <Card.Img variant="top" src={systemDesignDiagram} />
        <Card.Body>
          <Card.Title>Inventory Management System Design</Card.Title>
          <Card.Text>
            Making a software design document of Inventory management System which is a web-based solution designed to optimize the buying, storing, and selling of stock.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', marginLeft: '5px' }}>
      <Card.Img variant="top" src={portfolioHomePage} />
      <Card.Body>
        <Card.Title>Web site design - Portfolio</Card.Title>
        <Card.Text>
          Making a portfolio, others can find an overview of my professional journey, key projects I've contributed to, and a showcase of my skills and accomplishments.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', marginLeft: '5px' }}>
      <Card.Img variant="top" src={gameDesignLogo} />
      <Card.Body>
        <Card.Title>Game design - map touring</Card.Title>
        <Card.Text>
          Creating a side-scrolling action-adventure game that combines exploration and puzzle-solving involves developing the gameplay mechanics, narrative, and visual style.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
  )
  }