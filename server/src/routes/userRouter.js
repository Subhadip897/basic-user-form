const router = require("express").Router();

// local modules.
const {saveUserInfo} = require("../controllers/user");

router.post("/", saveUserInfo);

module.exports = router;