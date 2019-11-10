import { Router, Request, Response } from "express";

const router = Router();

router.get("/login", (req: Request, res: Response) => {
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
});

router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.send({ email, password });
});

export { router };
