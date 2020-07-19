import { Router } from "https://deno.land/x/oak/mod.ts";

// controllers
import { get, getOne, create } from "../../controllers/users.ts";

const router = new Router();

router
  .get("/api/users", get)
  .get("/api/users/:id", getOne)
  .post("/api/users", create);
  
export default router;