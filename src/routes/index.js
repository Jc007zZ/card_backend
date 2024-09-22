const { Router } = require("express");

const authRouter = require("./auth.routes");

const routes = Router();

routes.use("/auth", authRouter)

module.exports = routes;