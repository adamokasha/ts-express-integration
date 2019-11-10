import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

import { AppRouter } from "./AppRouter";
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
app.use(AppRouter.getInstance());

app.listen(3030, () => {
  console.log("Server is running on port 3030");
});
