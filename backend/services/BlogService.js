// Import the BlogModel, which is a Mongoose model for the "Blog" collection
const BlogModel = require("../models/Blog")

// Function to get all blogs from the database
exports.getAllBlogs = async () => {
    // Use Mongoose's find() method to retrieve all documents from the "Blog" collection
    return await BlogModel.find()
}

// Function to create a new blog in the database
exports.createBlog = async (blog) => {
    // Use Mongoose's create() method to insert a new document into the "Blog" collection
    return await BlogModel.create(blog)
}

// Function to get a specific blog by its ID from the database
exports.getBlogById = async (id) => {
    // Use Mongoose's findById() method to retrieve a document by its ID from the "Blog" collection
    return await BlogModel.findById(id)
}

// Function to update a specific blog by its ID in the database
exports.updateBlog = async (id, blog) => {
    // Use Mongoose's findByIdAndUpdate() method to update a document by its ID in the "Blog" collection
    return await BlogModel.findByIdAndUpdate(id, blog)
}

// Function to delete a specific blog by its ID from the database
exports.deleteBlog = async (id) => {
    // Use Mongoose's findByIdAndDelete() method to remove a document by its ID from the "Blog" collection
    return await BlogModel.findByIdAndDelete(id)
}
