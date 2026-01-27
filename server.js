const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8000;

const app = express();

let data = [
  {
    id: 1,
    post: "Hello World is th most overused wording in the programming",
    description: "This is a description of the post",
  },
  {
    id: 2,
    post: "Post 2",
    description: "This is a description of the post 2",
  },
  {
    id: 3,
    post: "Post 3",
    description: "This is a description of the post 3",
  },
];

// Routes -- root api
/**
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about-us.html"));
});
 */

// Static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/posts", (req, res) => {
  const {search_post} = req.query;

  if(search_post) {
    const filteredPosts = data.filter(post => post.post.toLowerCase().includes(search_post.toLowerCase()));
    return res.json(filteredPosts);
  }
  res.json(data);
});

app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const getPost = data.find((post) => post.id === id);

  if (!getPost) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json(getPost);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
