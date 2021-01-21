require("isomorphic-fetch");
const dotenv = require("dotenv");
dotenv.config();

const Koa = require("koa");
const next = require("next");
const { default: createShopifyAuth } = require("@shopify/koa-shopify-auth");
const { verifyRequest } = require("@shopify/koa-shopify-auth");
const session = require("koa-session");
const Router = require("@koa/router");
const bodyParser = require("koa-bodyparser");

const rootRouter = require("./API/index");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY } = process.env;

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.use(session({ sameSite: "none", secure: true }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      scopes: ["read_products", "write_products", "read_script_tags", "write_script_tags"],
      embedded: false,
      afterAuth(ctx) {
        const { shop, accessToken, request } = ctx.session;
        //console.log("We did it!", accessToken);
        ctx.cookies.set("shopAccessToken", accessToken, { httpOnly: false, secure: true, sameSite: "none" });
        ctx.cookies.set("shopOrigin", shop, { httpOnly: false, secure: true, sameSite: "none" });
        ctx.redirect("/");
      },
    })
  );

  server.use(verifyRequest());
  // server.use(async (ctx) => {
  //   await handle(ctx.req, ctx.res);
  //   ctx.respond = false;
  //   ctx.res.statusCode = 200;
  // });
  server.use(bodyParser());

  router.use("/api", rootRouter.routes());

  router.get("(.*)", async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  server.use(router.allowedMethods());
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
