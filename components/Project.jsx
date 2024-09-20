import Card from 'react-bootstrap/Card';
import cfd from '../src/assets/image/cfd.jpg'; 
import portfolio from '../src/assets/image/portfolio.png'; 
export default function Project() {
    return (
    <div className="project-card">
      <Card style={{ width: '18rem', marginLeft: '5px' }}>
        <Card.Img variant="top" src={cfd} />
        <Card.Body>
          <Card.Title>Inventory Management System Design</Card.Title>
          <Card.Text>
            Making a software design document of Inventory management System which is a web-based solution designed to optimize the buying, storing, and selling of stock.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem', marginLeft: '5px' }}>
      <Card.Img variant="top" src={portfolio} />
      <Card.Body>
        <Card.Title>Web site design - Portfolio</Card.Title>
        <Card.Text>
          Making a portfolio, others can find an overview of my professional journey, key projects I've contributed to, and a showcase of my skills and accomplishments.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', marginLeft: '5px' }}>
    <Card.Img variant="top" src={cfd} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  )
  }