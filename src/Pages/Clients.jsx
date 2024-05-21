import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} from "../Services/ClientsService";
import { ClientsTable } from "../Components/Client.Table";
import { ClientsForm } from "../Components/ModalClients";

export const Clients = () => {
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState({
    NombreComercial: "",
    Telefono: "",
    Correo: "",
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getClients().then((data) => {
      setClients(data);
    });
  }, []);
  const handleShow = () => {
    setShowModal(!showModal);
  };

  const handleEditClient = (data) => {
    console.log(data);
    setClient(data);
    handleShow();
  };

  const handleDeleteClient = (id) => {
    deleteClient(id).then(() => {
      setClients(clients.filter((client) => client.id !== id));
    });
  };

  return (
    <Container>
      <h1>Clients</h1>
      <Button variant="primary" onClick={() => setShowModal(!showModal)}>
        Add Client
      </Button>
      <ClientsTable
        data={clients}
        deleteClient={(id) => handleDeleteClient(id)}
        editClient={(data) => handleEditClient(data)}
      />
      <ClientsForm
        showModal={showModal}
        closeModal={() => handleShow()}
        data={client}
      />
    </Container>
  );
};
