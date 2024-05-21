import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function ClientsForm({ data, showModal, closeModal }) {
  const [show, setShow] = useState(false);
  const [Title, setTitle] = useState("");

  useEffect(() => {
    showModal ? setShow(true) : setShow(false);
  }, [showModal]);

  useEffect(() => {
    let title = data.id ? `Edit: ${data.NombreComercial}` : "Add a New Client";
    setTitle(title);
  }, [data]);

  return (
    <Modal
      show={show}
      onHide={(e) => closeModal()}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Do not even try to press
        escape key.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={(e) => closeModal(e)}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
}
