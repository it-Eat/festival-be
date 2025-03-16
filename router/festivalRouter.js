import express from "express";
import patchFestivalController from "../controllers/festivalController.js";
import { uploadImage } from "../middleware/image/uploadMiddleware.js";

const router = express.Router();

router
  .route("/:festivalId")
  .patch(uploadImage("image", false), patchFestivalController.patchFestival);

router.route("/").get(patchFestivalController.getFestival);

export default router;
