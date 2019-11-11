import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import { AppRouter } from "./AppRouter";
import "./controllers/RootController";
import "./controllers/LoginController";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cookieSession({ keys: ["sdkfosdjfo"] }));
app.use(AppRouter.getInstance());

app.listen(3030, () => {
  console.log("Server is running on port 3030");
});
