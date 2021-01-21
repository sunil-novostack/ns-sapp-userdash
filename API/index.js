const Router = require("@koa/router");
const router = new Router();

const Shopify = require("shopify-api-node");

router.get("/product", async (ctx, next) => {
  try {
    const params = { limit: 10 };

    const shopify = new Shopify({
      shopName: ctx.cookies.get("shopOrigin"),
      accessToken: ctx.cookies.get("shopAccessToken"),
    });

    const data = await shopify.product.list(params);

    ctx.res.statusCode = 200;
    ctx.body = data;
  } catch (error) {
    console.log(error);
    ctx.res.statusCode = 405;
    ctx.body = error;
  }
});

router.post("/product", async (ctx) => {
  try {
    const shopify = new Shopify({
      shopName: ctx.cookies.get("shopOrigin"),
      accessToken: ctx.cookies.get("shopAccessToken"),
    });
    const data = await shopify.product.create({ ...ctx.request.body });

    ctx.res.statusCode = 200;
    ctx.body = data;
  } catch (error) {
    console.log(error);
    ctx.res.statusCode = 405;
    ctx.body = error;
  }
});

module.exports = router;
