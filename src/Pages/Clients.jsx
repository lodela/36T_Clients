import { useEffect } from "react";
import {
  getClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} from "./Services/ClientService";

export const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients().then((data) => setClients(data));
  }, []);

  useEffect(() => {
    console.log(clients);
  }, [clients]);

  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>{client.name}</li>
        ))}
      </ul>
    </div>
  );
};
