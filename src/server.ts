/*
 * Title: Healthcare Server
 * Description: A backend application for healthcare
 * Author: Md Naim Uddin
 * Github: naimuddin94
 * Date: 03/06/2025
 *
 */

import { Server } from "http";
import app from "./app";

const port = process.env.PORT || 5000;

(async function () {
  const server: Server = app.listen(port, function () {
    console.log("Server listening on port: ", port);
  });
})();
