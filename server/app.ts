import { Application } from "https://deno.land/x/oak/mod.ts";

// routes
import users from "./routes/api/users.ts";

const app = new Application();

// api
app.use(users.routes(), users.allowedMethods());

console.log("server running...");
await app.listen({ port: 8000 });