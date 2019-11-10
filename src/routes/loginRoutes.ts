import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.post("/login", (req: RequestWithBody, res: Response) => {
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
});

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <div>
        You are logged in
      </div>
      <a href="/logout">Log out</a>
    </div>
    `);
  } else {
    res.send(`
    <div>
      <div>
        You are not logged in
      </div>
      <a href="/login">Log in</a>
    </div>
    `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

export { router };
