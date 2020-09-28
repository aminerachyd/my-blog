const express = require("express");
const { firestore } = require("../config/firebaseConfig");

const uploadImage = require("../middlewares/uploadImage");

const paragraphsCollection = firestore.collection("paragraphs");
const projectsCollection = firestore.collection("projects");

const router = express.Router();

// TODO Add GETs by ID ?

// ### PARAGRAPHS ###

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
router.post("/paragraphs", uploadImage, async (req, res) => {
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
router.put("/paragraphs/:id", uploadImage, async (req, res) => {
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

// ### PROJECTS ###

// @route  GET api/about/projects
// @desc   Retrieves all projects
router.get("/projects", async (req, res) => {
  try {
    const snapshot = await projectsCollection.get();

    let projects = [];

    snapshot.forEach((doc) => {
      const { image, title, link, description } = doc.data();

      const projectItem = {
        id: doc.id,
        image,
        title,
        link,
        description,
      };

      projects.push(projectItem);
    });

    res.send(projects);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route  POST api/about/projects
// @desc   Adds a new project to the portfolio section
router.post("/projects", uploadImage, async (req, res) => {
  try {
    let project;

    if (req.someVar) {
      project = {
        title: req.body.title,
        description: req.body.description,
        link: req.body.link,
        image: req.someVar,
      };
    } else {
      project = {
        title: req.body.title,
        description: req.body.description,
        link: req.body.link ? req.body.link : "",
      };
    }

    await projectsCollection.add(project);

    res.send("New Project Added");
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route  PUT api/about/projects:id
// @desc   Updates a project based on its ID
router.put("/projects/:id", uploadImage, async (req, res) => {
  try {
    const docSnapshot = await projectsCollection.doc(req.params.id).get();
    if (docSnapshot.data()) {
      let projectUpdate;

      if (req.someVar) {
        projectUpdate = {
          image: req.someVar,
          title: req.body.title,
          description: req.body.description,
          link: req.body.link,
        };
      } else {
        projectUpdate = {
          title: req.body.title,
          description: req.body.description,
          link: req.body.link,
        };
      }

      await projectsCollection.doc(req.params.id).update(projectUpdate);

      res.send(`Project ${req.params.id} Updated`);
    } else {
      res.status(400).send("Project not found");
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

// @route  DELETE api/about/projects:id
// @desc   Deletes a project based on its ID
router.delete("/projects/:id", async (req, res) => {
  try {
    const docSnapshot = await projectsCollection.doc(req.params.id).get();
    if (docSnapshot.data()) {
      await projectsCollection.doc(req.params.id).delete();

      res.send(`Project ${req.params.id} Deleted`);
    } else {
      res.status(400).send("Project not found");
      return;
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
