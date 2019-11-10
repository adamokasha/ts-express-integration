import { Request, Response } from "express";
import { get, controller } from "./decorators";

@controller("/auth")
export class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</lable>
        <input name="email"/>
      </div>

      <div>
        <label>Password</lable>
        <input name="password" type="password"/>
      </div>
        <button>Submit</button>
    </form>  
  `);
  }
}
