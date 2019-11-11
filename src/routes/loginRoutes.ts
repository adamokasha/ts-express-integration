import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

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
