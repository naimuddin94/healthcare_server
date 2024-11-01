import { Server } from "http";
import app from "./app";

const port = process.env.PORT || 5000;

(async function () {
  const server: Server = app.listen(port, function () {
    console.log("Server listening on port: ", port);
  });
})();
