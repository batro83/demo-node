

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all BookInstances.
exports.transmitters = function(req, res) {
    res.send('NOT IMPLEMENTED: transmitters list');
};

// Display detail page for a specific BookInstance.
exports.transmittersLocation = function(req, res) {
    res.send('NOT IMPLEMENTED: transmittersLocation detail: ' + req.params.id);
};
