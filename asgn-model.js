const mongoose = require("mongoose");

var asgnSchema = mongoose.Schema({
	courseName: {
		type: String
	},
	assignmentName: {
		type: String,
		required: true
	},	
	dueDate:{
		type: Date
	}
});

var Asgn = module.exports = mongoose.model("assignment", asgnSchema);
module.exports.get = function (callback, limit) {
	Asgn.find(callback).limit(limit);
}