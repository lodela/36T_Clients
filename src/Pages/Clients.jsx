import { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import {
  getClients,
  createClient,
  updateClient,
  deleteClient,
} from '../Services/ClientsService'
import { ClientsTable } from '../Components/Client.Table'
import { ClientsForm } from '../Components/ModalClients'

const initialState = {
  NombreComercial: '',
  Telefono: '',
  Correo: '',
}

export const Clients = () => {
  const [clients, setClients] = useState([])
  const [client, setClient] = useState({ ...initialState })
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    getClients().then((data) => {
      setClients(data)
    })
  }, [])
  const handleShow = () => {
    setShowModal(!showModal)
  }

  const handleCloseModal = () => {
    setClient(initialState)
    setShowModal(false)
  }

  const handleEditClient = async (id) => {
    const clientToEdit = await clients.find((client) => client.id === id)
    setClient({ ...clientToEdit })
    handleShow()
  }

  const handleDeleteClient = (id) => {
    deleteClient(id).then(() => {
      setClients(clients.filter((client) => client.id !== id))
    })
  }
  const handleUpdate = (data) => {
    // const oldClients = clients
    updateClient(data).then((res) => {
      console.log(res)
      // setClients(
      //   oldClients.map((client) => (client.id === data.id ? data : client)),
      // )
    })
  }
  const handleCreate = (data) => {
    const newClients = clients
    newClients.push(data)
    setClients(newClients)
    createClient(data)
  }

  const handleData = (data) => {
    console.log(client)
    data.id === client.id ? handleUpdate(data) : handleCreate(data)
    handleCloseModal()
  }

  return (
    <Container>
      <h1>Clients</h1>
      <Button variant="primary" onClick={() => setShowModal(!showModal)}>
        Add Client
      </Button>
      <ClientsTable
        data={clients}
        deleteClient={(id) => handleDeleteClient(id)}
        editClient={(id) => handleEditClient(id)}
      />
      <ClientsForm
        showModal={showModal}
        closeModal={() => handleCloseModal()}
        data={client}
        handleData={(e) => handleData(e)} // to save or update data
      />
    </Container>
  )
}
