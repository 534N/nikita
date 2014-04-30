businesses = new Meteor.Collection('businesses');




businesses.allow({
	insert: function(bname) {
		return false;
	},
	update: function(bname) {
		return true;
	},
	remove: function(bname) {
		return true;
	}
});

Meteor.methods({
	addBiz: function(options) {
		return businesses.insert({
			params: options.params
		});	
	}
});


getBizMatchThis = function(keyword) {
	var updates = [];
	var businessesRecords = businesses.find({
		"params.value": { $regex: keyword, $options: 'i' }
	});
	businessesRecords.forEach(function(rec) {
		updates.push(rec);
	})
	return updates;
};


getAllBusinesses = function() {
	var updates = [];
	var businessesRecords = businesses.find();
	businessesRecords.forEach(function(rec) {
		updates.push(rec);
	})
	return updates;
};

