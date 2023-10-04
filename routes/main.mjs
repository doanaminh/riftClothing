import express from "express";
const router = express.Router();

// const authController = require("../controllers/auth");
// const homeController = require("../controllers/home");
// const postsController = require("../controllers/posts");
// const { ensureAuth, ensureGuest, ensureCreate } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", (req, res) => {
  res.render("Home.jsx");
});
// router.get("/", homeController.getIndex);
// router.get("/profile", ensureAuth, postsController.getProfile);
// router.get("/feed", ensureAuth, postsController.getFeed);
// router.get("/feed-guest", postsController.getFeedGuest);
// router.get("/login", authController.getLogin);
// router.post("/login", authController.postLogin);
// router.get("/logout", authController.logout);
// router.get("/signup", authController.getSignup);
// router.post("/signup", authController.postSignup);

export default router;
