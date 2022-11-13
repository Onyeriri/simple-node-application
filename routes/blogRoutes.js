const express = require("express");
const {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
} = require("../controllers/blogControllers");

const router = express.Router();

router.post("/", blog_create_post);
router.get("/create", blog_create_get);
router.get("/:id", blog_details);
router.delete("/:id", blog_delete);
router.get("/", blog_index);

module.exports = router;
