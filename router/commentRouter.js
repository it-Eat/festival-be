import commentController from "../controllers/commentController.js";
import express from "express";
import passport from "../config/passportConfig.js";

const router = express.Router();

router
  .route("/:boardId/:festivalId")
  .post(
    passport.authenticate("access-token", { session: false }),
    commentController.createComment
  )
  .get(commentController.getComments);

router
  .route("/:commentId/:festivalId")
  .all(passport.authenticate("access-token", { session: false }))
  .patch(commentController.updateComment)
  .delete(commentController.deleteComment);

export default router;
