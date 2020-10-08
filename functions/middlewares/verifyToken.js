const { auth } = require("../config/firebaseConfig");

module.exports = verifyToken = async (req, res, next) => {
  try {
    // Token verification
    await auth.verifyIdToken(req.headers.token);
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send("Unauthorized");
  }
};
