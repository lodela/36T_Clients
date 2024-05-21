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
import { SearchBar } from '../Components/SearchBar'

const initialState = {
  NombreComercial: '',
  Telefono: '',
  Correo: '',
}

export const Clients = () => {
  const [clients, setClients] = useState([])
  const [client, setClient] = useState({ ...initialState })
  const [showModal, setShowModal] = useState(false)
  const [filteredClients, setFilteredClients] = useState([])

  const handleSearch = (searchTerm) => {
    const filtered = clients.filter((client) =>
      client.NombreComercial.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    setFilteredClients(filtered)
  }

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
    const oldClients = clients
    updateClient(data).then((res) => {
      setClients(
        oldClients.map((client) => (client.id === res.id ? res : client)),
      )
    })
  }
  const handleCreate = (data) => {
    const newClients = clients
    newClients.push(data)
    setClients(newClients)
    createClient(data)
  }

  const handleData = (data) => {
    data.id === client.id ? handleUpdate(data) : handleCreate(data)
    handleCloseModal()
  }

  useEffect(() => {
    getClients().then((data) => {
      setClients(data)
      setFilteredClients(data)
    })
  }, [])

  return (
    <Container>
      <h1>Clients</h1>
      <Button variant="primary" onClick={() => setShowModal(!showModal)}>
        Add Client
      </Button>
      <SearchBar onSearch={handleSearch} />
      <ClientsTable
        data={filteredClients}
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
