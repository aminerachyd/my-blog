const express = require("express");
const { firestore } = require("../config/firebaseConfig");

const postImage = require("../middleware/postImage");

const paragraphsCollection = firestore.collection("paragraphs");

const router = express.Router();

// TODO continue API route
router.get("/paragraphs", async (req, res) => {
  try {
    const snapshot = await paragraphsCollection.orderBy("order").get();

    let paragraphs = [];

    snapshot.forEach((doc) => {
      const { image, text, order } = doc.data();

      const paragraphItem = {
        id: doc.id,
        image,
        text,
        order,
      };

      paragraphs.push(paragraphItem);
    });

    res.send(paragraphs);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @method POST
// @return Add a new paragraph (object) to collection
// @desc Adds a new paragraph (text+image) to the about section
router.post("/paragraphs", postImage, async (req, res) => {
  try {
    let paragraph;

    if (req.someVar) {
      paragraph = {
        order: req.body.order,
        text: req.body.text,
        image: req.someVar,
      };
    } else {
      paragraph = {
        order: req.body.order,
        text: req.body.text,
      };
    }

    await paragraphsCollection.add(paragraph);

    res.send("New Paragraph Added");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @method PUT
// @return Add a new paragraph (object) to collection
// @desc Adds a new paragraph (text+image) to the about section
router.put("/paragraphs/:id", postImage, async (req, res) => {
  try {
    // Getting image link from the middleware
    const imageLink = req.someVar;

    const paragraph = {
      order: req.body.order,
      text: req.body.text,
      image: imageLink,
    };

    await paragraphsCollection.add(paragraph);

    res.send("New Paragraph Added");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
