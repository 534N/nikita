Meteor.publish("businesses", function() {
	return businesses.find({
		$or: [{
			"public": true
		}, {
			_id: this.userId
		}]
	});
});
