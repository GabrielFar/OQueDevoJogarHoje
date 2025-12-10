const express = require("express");
const passport = require("passport");
const authService = require("../services/auth-service");

const authRouter = express.Router();

authRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  authService.login
);

authRouter.post("/logout", authService.logout);

module.exports = authRouter;