// Import the BlogServices module, which contains functions for handling business logic related to blogs
const BlogServices = require("../services/BlogService")

// Controller function to get all blogs
exports.getAllBlogs = async (req, res) => {
    try {
        // Call the getAllBlogs function from the BlogServices module to retrieve all blogs
        const blogs = await BlogServices.getAllBlogs()

        // Respond with a JSON object containing the retrieved blogs and a success status
        res.json({ data: blogs, status: "success" })
        
    } catch (err) {
        // If an error occurs, respond with a 500 Internal Server Error and the error message
        res.status(500).json({ error: err.message })
    }
}

// Controller function to create a new blog
exports.createBlog = async (req, res) => {
    try {
        // Call the createBlog function from the BlogServices module, passing the request body as the blog data
        const blog = await BlogServices.createBlog(req.body)

        // Respond with a JSON object containing the created blog and a success status
        res.json({ data: blog, status: "success" })
    } catch (err) {
        // If an error occurs, respond with a 500 Internal Server Error and the error message
        res.status(500).json({ error: err.message })
    }
}

// Controller function to get a specific blog by its ID
exports.getBlogById = async (req, res) => {
    try {
        // Call the getBlogById function from the BlogServices module, passing the blog ID from the request parameters
        const blog = await BlogServices.getBlogById(req.params.id)

        // Respond with a JSON object containing the retrieved blog and a success status
        res.json({ data: blog, status: "success" })
    } catch (err) {
        // If an error occurs, respond with a 500 Internal Server Error and the error message
        res.status(500).json({ error: err.message })
    }
}

// Controller function to update a specific blog by its ID
exports.updateBlog = async (req, res) => {
    try {
        // Call the updateBlog function from the BlogServices module, passing the blog ID from the request parameters and the updated blog data from the request body
        const blog = await BlogServices.updateBlog(req.params.id, req.body)

        // Respond with a JSON object containing the updated blog and a success status
        res.json({ data: blog, status: "success" })
    } catch (err) {
        // If an error occurs, respond with a 500 Internal Server Error and the error message
        res.status(500).json({ error: err.message })
    }
}

// Controller function to delete a specific blog by its ID
exports.deleteBlog = async (req, res) => {
    try {
        // Call the deleteBlog function from the BlogServices module, passing the blog ID from the request parameters
        const blog = await BlogServices.deleteBlog(req.params.id)

        // Respond with a JSON object containing the deleted blog and a success status
        res.json({ data: blog, status: "success" })
    } catch (err) {
        // If an error occurs, respond with a 500 Internal Server Error and the error message
        res.status(500).json({ error: err.message })
    }
}
