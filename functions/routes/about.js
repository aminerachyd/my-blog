const express = require("express");
const { firestore } = require("../config/firebaseConfig");

const postImage = require("../middleware/postImage");

const paragraphsCollection = firestore.collection("paragraphs");

const router = express.Router();

// @route   GET api/about/paragraphs
// @desc    Retrieves all the paragraphs from the database
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

// @route   POST api/about/paragraphs
// @desc    Adds a new paragraph (text+image) to the about section
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

// @route  PUT api/about/paragraphs/:id
// @desc   Updates a paragraph based on its ID
router.put("/paragraphs/:id", postImage, async (req, res) => {
  try {
    const docSnapshot = await paragraphsCollection.doc(req.params.id).get();
    if (docSnapshot.data()) {
      let paragraphUpdate;

      if (req.someVar) {
        paragraphUpdate = {
          order: req.body.order,
          text: req.body.text,
          image: req.someVar,
        };
      } else {
        paragraphUpdate = {
          order: req.body.order,
          text: req.body.text,
        };
      }

      await paragraphsCollection.doc(req.params.id).update(paragraphUpdate);

      res.send(`Paragraph ${req.params.id} Updated`);
    } else {
      res.status(400).send("Paragraph not found");
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route  DELETE api/about/paragraphs/:id
// @desc   Deletes a paragraph based on its ID
router.delete("/paragraphs/:id", async (req, res) => {
  try {
    const docSnapshot = await paragraphsCollection.doc(req.params.id).get();
    if (docSnapshot.data()) {
      await paragraphsCollection.doc(req.params.id).delete();

      res.send(`Paragraph ${req.params.id} Deleted`);
    } else {
      res.status(400).send("Paragraph not found");
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
