const Asgn = require("./asgn-model"); // refactored Contacts to Asgn


// Corresponds to GET api/asgn
// LIST ALL THE ASSIGNMENTS

exports.index = function (req, res) {
	Asgn.get(function (err, asgn) { // refactored Contacts to Asgn && contacts to assignments
		if (err) {
			res.json({
				status: "error",
				message: err,
			});
		}
		res.json({
			status: "success",
			message: "Grades retrieved successfully",
			data: asgn // refactor contacts to asgn
		});
	});
}

// Corresponds to POST api/asgn
//HANDLE CREATE ASSIGNMENT ACTIONS

exports.new = function (req, res) {
    var asgn = new Asgn();
    asgn.assignmentName = req.body.assignmentName ? req.body.assignmentName : asgn.assignmentName;
    asgn.courseName = req.body.courseName;
    asgn.dueDate = req.body.dueDate;
// save the assignment and check for errors
    
asgn.save( (err) => { // refactor contacts to asgn
        if (err) {
            res.json(err);
		}
		res.json({
            message: 'New assignment created!',
            data: asgn // refactor contacts to asgn
        });
    });
};


 //Handle find assignments using ID
 //Corresponds to GET /api/asgn/:asgn_id

 exports.view = function (req, res) {
    Asgn.findById(req.params.asgn_id, function (err, asgn) {
        if (err) {
            res.send(err);
		}
        res.json({
            message: 'Assignment details loading..',
            data: asgn
        });
    });
};



 // Handle update assignment details
 // Corresponds to PUT /api/asgn/:asgn_id

 exports.update = function (req, res) {
	Asgn.findById(req.params.asgn_id, function (err, asgn) {
        if (err) {
            res.send(err);
		}
		asgn.assignmentName = req.body.assignmentName ? req.body.assignmentName : asgn.assignmentName;
		asgn.courseName = req.body.courseName;
		asgn.dueDate = req.body.dueDate;
// save the assignment changes and check for errors
        asgn.save(function (err) {
            if (err) {
                res.json(err);
			}
            res.json({
                message: 'Assignment Info updated',
                data: asgn
            });
        });
    });
};


// Handle delete assignment
// Corresponds to DELETE /api/asgn/:asgn_id

exports.delete = function (req, res) {
    Asgn.remove({
        _id: req.params.asgn_id
    }, function (err, asgn) {
        if (err) {
            res.send(err);
		}
		res.json(
			{
				status: "success",
				message: 'Assignment deleted'
			});
    });
};

