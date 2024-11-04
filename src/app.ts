import cors from "cors";
import express, { Application, Request, Response } from "express";
import routes from "./app/routes";
import globalErrorHandler from "./app/utils/globalErrorHandler";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "PH Health Care Server is running :(" });
});

app.use("/api/v1", routes);

//@ts-ignore
app.use(globalErrorHandler);

export default app;
