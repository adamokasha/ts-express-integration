import { Request, Response, NextFunction } from "express";
import { get, controller, post, bodyValidator } from "./decorators";

// function logger(req: Request, res: Response, next: NextFunction) {
//   console.log("Request was made");
//   next();
// }

@controller("/auth")
export class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</lable>
        <input name="emil"/>
      </div>

      <div>
        <label>Password</lable>
        <input name="password" type="password"/>
      </div>
        <button>Submit</button>
    </form>  
  `);
  }

  @post("/login")
  @bodyValidator("email", "password")
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    // Typeguard with extended RequestWithBody interface
    if (email && password && email === "hi@hi.com" && password === "password") {
      // mark person as logged in
      req.session = { loggedIn: true };
      res.redirect("/");
      // redirect to root route
    } else {
      res.status(401).send("Invalid email or password");
    }
  }
}
