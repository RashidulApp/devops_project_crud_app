// Import necessary modules and components
const request = require('supertest');
const app = require('../app');
const Blog = require('../models/Blog');

// Begin describing the test suite for Blogs
describe('Blogs', () => {
  // Run this function before each test case in this test suite
  beforeEach(async () => {
    // Delete all documents in the Blog collection
    await Blog.deleteMany();
  });

  // Describe the GET request for all blogs
  describe('GET /api/blogs', () => {
    // Specify the behavior of the test case
    it('should GET all the blogs', async () => {
      // Send a GET request to the '/api/blogs' endpoint using supertest
      const response = await request(app).get('/api/blogs');
      
      // Assertions to check the response
      expect(response.status).toBe(200);
      expect(response.body.data).toBeInstanceOf(Array);
      expect(response.body.data.length).toBe(0); // No blogs should be present initially
    });
  });

  // Describe the POST request for creating a new blog
  describe('POST /api/blogs', () => {
    // Specify the behavior of the test case
    it('should POST a new blog', async () => {
      // Define a blog object for the POST request
      const blog = {
        title: 'This is the first blog',
        body: 'This is a blog post',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      };

      // Send a POST request to the '/api/blogs' endpoint with the defined blog object
      const response = await request(app).post('/api/blogs').send(blog);

      // Assertions to check the response
      expect(response.status).toBe(200);
      expect(response.body.data).toBeInstanceOf(Object);
      expect(response.body.status).toBe('success');
    });
  });

  // Describe the GET request for retrieving a blog by ID
  describe('GET /api/blogs/:id', () => {
    // Specify the behavior of the test case
    it('should GET a blog by the id', async () => {
      // Create a new blog, save it to the database, and retrieve its ID
      const blog = new Blog({
        title: 'This is the first blog',
        body: 'This is a blog post',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      });
      await blog.save();

      // Send a GET request to the '/api/blogs/:id' endpoint using the retrieved blog's ID
      const response = await request(app).get(`/api/blogs/${blog.id}`);
      
      // Assertions to check the response
      expect(response.status).toBe(200);
      expect(response.body.data).toBeInstanceOf(Object);
      expect(response.body.status).toBe('success');
    });
  });

  // Describe the PUT request for updating a blog by ID
  describe('PUT /api/blogs/:id', () => {
    // Specify the behavior of the test case
    it('should UPDATE a blog given the id', async () => {
      // Create a new blog, save it to the database, and retrieve its ID
      const blog = new Blog({
        title: 'This is the first blog',
        body: 'This is a blog post',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      });
      await blog.save();

      // Send a PUT request to the '/api/blogs/:id' endpoint with updated blog data
      const response = await request(app)
        .put(`/api/blogs/${blog.id}`)
        .send({
          title: 'The first blog was updated',
          body: 'This is a blog post',
          image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        });

      // Assertions to check the response
      expect(response.status).toBe(200);
      expect(response.body.data).toBeInstanceOf(Object);
      expect(response.body.status).toBe('success');
    });
  });

  // Describe the DELETE request for deleting a blog by ID
  describe('DELETE /api/blogs/:id', () => {
    // Specify the behavior of the test case
    it('should DELETE a blog given the id', async () => {
      // Create a new blog, save it to the database, and retrieve its ID
      const blog = new Blog({
        title: 'This is the first blog',
        body: 'This is a blog post',
        image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      });
      await blog.save();

      // Send a DELETE request to the '/api/blogs/:id' endpoint using the retrieved blog's ID
      const response = await request(app).delete(`/api/blogs/${blog.id}`);
      
      // Assertions to check the response
      expect(response.status).toBe(200);
      expect(response.body.data).toBeInstanceOf(Object);
      expect(response.body.status).toBe('success');
    });
  });
});
