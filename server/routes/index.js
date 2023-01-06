const express = require("express");
const router = express.Router({ mergeParams: true });

router.use("/tools", require("./tools.routes"));
router.use("/news", require("./news.routes"));

router.use("/auth", require("./auth.routes"));
router.use("/options", require("./options.routes"));
router.use("/message", require("./message.routes"));
// router.use("/idn", require("./idn.routes"));

module.exports = router;
