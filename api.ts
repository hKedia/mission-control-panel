import { Router } from "https://deno.land/x/oak@v5.2.0/mod.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = `
  88888b.  8888b. .d8888b  8888b.  
  888 "88b    "88b88K         "88b 
  888  888.d888888"Y8888b..d888888 
  888  888888  888     X88888  888 
  888  888"Y888888 88888P'"Y888888
  `;
});

export default router;
