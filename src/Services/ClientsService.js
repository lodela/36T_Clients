import { useFetch } from "react-fetch-hook";

const baseUrl = "http://localhost:3000/clients";

export const getClients = async () => {
  const { isLoading, data } = useFetch(baseUrl);
  return isLoading ? [] : data;
};

export const getClientById = async (id) => {
  const { isLoading, data } = useFetch(`${baseUrl}/${id}`);
  return isLoading ? null : data;
};

export const createClient = async (client) => {
  const response = await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(client),
  });
  return response.json();
};

export const updateClient = async (client) => {
  const response = await fetch(`${baseUrl}/${client.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(client),
  });
  return response.json();
};

export const deleteClient = async (id) => {
  const response = await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
