import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import { router as controllerRouter } from "./controllers/decorators/controller";
import "./controllers/LoginController";

import { router } from "./routes/loginRoutes";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cookieSession({ keys: ["sdkfosdjfo"] }));
app.use(router);
app.use(controllerRouter);

app.listen(3030, () => {
  console.log("Server is running on port 3000");
});
