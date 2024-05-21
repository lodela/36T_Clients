import express from "express";
import cors from "cors";
import jsonServer from "json-server";

const app = express();
const router = await jsonServer.router("Mocks/Clients.json");

app.use(cors());
app.use(express.json());
app.use("/clients", router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

export default app;
