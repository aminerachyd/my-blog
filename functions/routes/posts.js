const express = require("express");
const { firestore } = require("../config/firebaseConfig");

const router = express.Router();

const postsCollection = firestore.collection("posts");

// @route   GET api/posts
// @desc    Gets all posts of the database
router.get("/", async (req, res) => {
  try {
    const snapshot = await postsCollection.orderBy("createdAt", "desc").get();

    let posts = [];

    snapshot.forEach((doc) => {
      const { title, body, tags, createdAt, lastUpdated } = doc.data();

      const postItem = {
        id: doc.id,
        title: title,
        body: body,
        tags: tags,
        createdAt: createdAt,
        lastUpdated: lastUpdated,
      };
      posts.push(postItem);
    });

    res.send(posts);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/posts/:id
// @desc    Gets a specefic post from the database with its ID
router.get("/:id", async (req, res) => {
  try {
    const docSnapshot = await postsCollection.doc(req.params.id).get();

    // Tests if the post actually exists
    if (docSnapshot.data()) {
      res.send(docSnapshot.data());
    } else {
      res.status(400).send("Post not found");
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/posts
// @desc    Adds a post to the database
router.post("/", async (req, res) => {
  try {
    const date = new Date().toUTCString();
    const { title, body, tags } = req.body;
    const newPost = {
      title,
      body,
      tags,
      createdAt: date,
      lastUpdated: date,
    };
    await postsCollection.add(newPost);

    res.send("New Post Added");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/posts/:id
// @desc    Deletes a specefic post from the database with its ID
router.delete("/:id", async (req, res) => {
  try {
    const docSnapshot = await postsCollection.doc(req.params.id).get();

    // Tests if the post actually exists
    if (docSnapshot.data()) {
      await postsCollection.doc(req.params.id).delete();

      res.send(`Post ${req.params.id} Deleted`);
    } else {
      res.status(400).send("Post not found");
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route   PUT api/posts/:id
// @desc    Updates a specefic post from the database with its ID
router.put("/:id", async (req, res) => {
  try {
    const docSnapshot = await postsCollection.doc(req.params.id).get();

    // Tests if the post actually exists
    if (docSnapshot.data()) {
      const date = new Date().toUTCString();
      const { title, body, tags } = req.body;
      const updatePost = {
        title,
        body,
        tags,
        lastUpdated: date,
      };

      await postsCollection.doc(req.params.id).update(updatePost);

      res.send(`Post ${req.params.id} Updated`);
    } else {
      res.status(400).send("Post not found");
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
