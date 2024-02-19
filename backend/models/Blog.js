// Import the Mongoose library
const mongoose = require("mongoose")

// Destructure the Schema object from Mongoose
const { Schema } = mongoose

// Define a schema for a blog post
const BlogSchema = Schema({
    title: String,          // Title of the blog post (assuming it's a short text)
    body: String,           // Body of the blog post (assuming it's a longer text)
    image: String,          // URL or file path to an image associated with the blog post
    createdAt: {
        type: Date,         // Date type for the creation timestamp
        default: Date.now   // Default value is the current date and time when not provided
    }
})

// Create a Mongoose model named "Blog" based on the defined schema
// This model will be used to interact with the MongoDB collection named "blogs"
module.exports = mongoose.model("Blog", BlogSchema)
