const express = require("express");
const router = express.Router();

// Middleware for uploading images
const postImage = require("../middleware/postImage");

const { firestore, storage } = require("../config/firebaseConfig");
const imagesCollection = firestore.collection("images");

// Storage reference
const storageRef = storage.ref();
// Images storage reference
const imagesRef = storageRef.child("images");

// @method  GET
// @return  Array of images
// @desc    Returns an array of the images in the database
router.get("/images", async (req, res) => {
  try {
    const snapshot = await imagesCollection.get();

    let images = [];

    snapshot.forEach((doc) => {
      const { link, name } = doc.data();

      const imageItem = {
        id: doc.id,
        link,
        name,
      };

      images.push(imageItem);
    });

    res.send(images);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @method  POST
// @return  Stores image link in Firestore
// @desc    Uploads an image to Storage and stores its download link in Firestore
router.post("/images", postImage, async (req, res) => {
  req.someVar
    ? res.json({ msg: "New Image Added", link: req.someVar })
    : res.end("No Image To Upload");
});

// @method  GET
// @return  One image
// @desc    Returns an image based on the ID given
router.get("/images/:id", async (req, res) => {
  try {
    const docSnapshot = await imagesCollection.doc(req.params.id).get();

    if (docSnapshot.data()) {
      res.send(docSnapshot.data());
    } else {
      res.status(400).send("Image not found");
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @method  DELETE
// @return  Deletes an image
// @desc    Deletes an image based on the ID given
router.delete("/images/:id", async (req, res) => {
  try {
    const docSnapshot = await imagesCollection.doc(req.params.id).get();

    if (docSnapshot.data()) {
      await imagesCollection.doc(req.params.id).delete();

      res.send(`Image ${req.params.id} Deleted`);
    } else {
      res.status(400).send("Image not found");
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
