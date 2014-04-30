Template.modals.events({
	'click #confirmAddBiz': function(e, template) {
		var that = $('#addBiz');
		var fields = that.find(':input'),
			name		= fields[0].value,
			address		= fields[1].value,
			city		= fields[2].value,
			province	= fields[3].value,
			phone		= fields[4].value,
			category	= fields[5].value,
			lat			= fields[6].value,
			lon			= fields[7].value;

		var params = [];

		for(var i=0; i<fields.length; i++) {
			params[i] = { 'field': fields[i].name, 'value': fields[i].value };
		}

		Meteor.call('addBiz', {
			params: params
		}, function(err, res) {
			if (!err) {
				var that = $('#addBiz');
				var fields = that.find(':input');

				for(var i=0; i<fields.length; i++) {
					$(fields[i]).val('');
				}
				
			}
		});

	}
});