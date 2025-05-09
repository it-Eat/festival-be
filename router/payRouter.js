import express from "express";
import passport from "../config/passportConfig.js";
import payController from "../controllers/payController.js";

const router = express.Router();

router
  .route("/")
  .all(passport.authenticate("access-token", { session: false }))
  .post(payController.createPay);

router
  .route("/:id")
  .all(passport.authenticate("access-token", { session: false }))
  .get(payController.getPay);

router
  .route("/user/:userId")
  .all(passport.authenticate("access-token", { session: false }))
  .get(payController.getPaysByUserId);

router
  .route("/seller/:boothId")
  .all(passport.authenticate("access-token", { session: false }))
  .get(payController.getPayByBoothId);

export default router;
