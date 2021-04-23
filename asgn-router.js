let router = require("express").Router();
var controller = require("./asgn-controller.js");


router.get("/", function (req, res) {
	res.json({
		status: "Asgn-API is Working.",
		message: "Welcome to the Assignments API."
	});
});

router.route("/asgn")
	.get(controller.index)
	.post(controller.new);

router.route("/asgn/:asgn_id")
	.get(controller.view)
	.put(controller.update)
	.delete(controller.delete);

module.exports = router;