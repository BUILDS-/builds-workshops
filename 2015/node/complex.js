var express = require("express");
var app = express();

var router = express.Router();

router.use("/", express.static("test"));

router.get("/:test", function (req, res) {
    res.send("You went to '" + req.params.test + "'");
});

app.use("/test", router);

app.use("/", function (req, res) {
    res.send("Hello, World!");
});

app.listen(3000, function () {
    console.log("Listening on port 3000");
});
