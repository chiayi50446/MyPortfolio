import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
          <a href="/" className='button-text'>Close</a>
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}
