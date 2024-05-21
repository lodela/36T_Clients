import { useEffect, useState } from 'react'
import { Table, ButtonGroup, Button } from 'react-bootstrap'
import { MdDeleteForever, MdModeEditOutline } from 'react-icons/md'

export const ClientsTable = ({ data, deleteClient, editClient }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [clients, setClients] = useState([])
  useEffect(() => {
    setClients(data)
  }, [data])
  useEffect(() => {
    setIsLoading(!isLoading)
  }, [clients])

  return (
    <Table responsive striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre Comercial</th>
          <th>Teléfono</th>
          <th>Correo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client, index) => (
          <tr key={client.id}>
            <td>{index}</td>
            <td>{client.NombreComercial}</td>
            <td>{client.Telefono}</td>
            <td>{client.Correo}</td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Button
                  variant="danger"
                  onClick={() => deleteClient(client.id)}
                >
                  <MdDeleteForever />
                </Button>
                <Button variant="primary" onClick={() => editClient(client.id)}>
                  <MdModeEditOutline />
                </Button>
              </ButtonGroup>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
