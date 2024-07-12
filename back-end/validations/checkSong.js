// validations/checkBookmarks.js
const checkName = (req, res, next) => {
  const { name, artist } = req.body;
    if (name && artist) {
      return next();
    } else {
      res.status(400).json({ error: "Name and Artist properties are required" });
    }
};

const checkBoolean = (req, res, next) => {
    if (typeof req.body.is_favorite === "boolean") {
      return next();
    } else {
      res.status(400).json({ error: "is_favorite must be a boolean value" });
    }
};
  
module.exports = { checkBoolean, checkName };