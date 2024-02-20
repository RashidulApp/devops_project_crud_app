// Import the Express framework
const express = require("express")

// Destructure specific functions from the blogControllers module
const { getAllBlogs, createBlog, getBlogById, updateBlog, deleteBlog } = require("../controllers/blogControllers")

// Create an Express router
const router = express.Router()

// Define routes for the "/blogs" endpoint

// Route for handling GET and POST requests to "/blogs"
router.route("/").get(getAllBlogs).post(createBlog)

// Route for handling GET, PUT, and DELETE requests to "/blogs/:id"
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog)

// Export the router to be used in other parts of the application
module.exports = router
