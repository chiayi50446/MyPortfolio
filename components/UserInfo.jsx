// Name: Chiayi Lin
// StudentID: 301448962
// Date: 09.27.24
// File name: UserInfo.jsx
// Section: COMP229 SEC 010

// This is the UserInfo.jsx popup page for my portfolio of web development work. It shows user's information

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

export default function UserInfo(props) {
  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          User Message
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Message from {props.name}</h4>
        <p>
          phone Number: {props.phone}
        </p>
        <p>
          email: {props.email}
        </p>
        <p>message content: {props.message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>
          <Link to="/MyPortfolio/" className="button-text">Close</Link>
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}
