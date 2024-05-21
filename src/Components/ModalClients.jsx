import { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { ClientForm } from './ClientsForm'

export function ClientsForm({ data, showModal, closeModal, handleData }) {
  const [action, setAction] = useState('')
  const [show, setShow] = useState(false)
  const [Title, setTitle] = useState('')

  useEffect(() => {
    showModal ? setShow(true) : setShow(false)
  }, [showModal])

  useEffect(() => {
    const title = data.id ? `Edit: ${data.NombreComercial}` : 'Add a New Client'
    const action = data.id ? 'Update Client' : 'Save New Client'
    setTitle(title)
    setAction(action)
  }, [data])

  return (
    <Modal
      size="lg"
      show={show}
      onHide={(e) => closeModal()}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ClientForm
          data={data}
          closeModal={closeModal}
          buttonText={action}
          handleData={(e) => handleData(e)}
        />
      </Modal.Body>
    </Modal>
  )
}
