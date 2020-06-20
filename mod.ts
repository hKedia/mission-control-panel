import { Application } from "https://deno.land/x/oak@v5.2.0/mod.ts";

const app = new Application();
const PORT = 8000;

app.use(async (ctx, next) => {
  await next();
  const time = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} ${time}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const delta = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${delta}ms`);
});

app.use((ctx) => {
  ctx.response.body = `
  88888b.  8888b. .d8888b  8888b.  
  888 "88b    "88b88K         "88b 
  888  888.d888888"Y8888b..d888888 
  888  888888  888     X88888  888 
  888  888"Y888888 88888P'"Y888888
  `;
});

if (import.meta.main) {
  await app.listen({
    port: PORT,
  });
}
