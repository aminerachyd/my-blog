const { firestore, storage } = require("../config/firebaseConfig");

const imagesCollection = firestore.collection("images");

// Storage reference
const storageRef = storage.ref();
// Images storage reference
const imagesRef = storageRef.child("images");

module.exports = uploadImage = async (req, res, next) => {
  try {
    if (req.files[0]) {
      // originalname is the name of the file
      // buffer is the image, we upload the buffer
      const { buffer, originalname } = req.files[0];

      let newImageRef = imagesRef.child(originalname);

      try {
        const newImageURL = await newImageRef.getDownloadURL();

        //   Passing the image link to the next middleware
        req.someVar = newImageURL;

        next();
      } catch (error) {
        console.log("Image doesn't exist in storage, adding the new image ...");

        // Snapshot of the storage bucket, might be useful later
        const snapshot = await newImageRef.put(buffer);

        const newImageURL = await newImageRef.getDownloadURL();

        await imagesCollection.add({ link: newImageURL, name: originalname });

        //   Passing the image link to the next middleware
        req.someVar = newImageURL;

        next();
      }
    } else {
      console.log("No Image To Upload");
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
};
