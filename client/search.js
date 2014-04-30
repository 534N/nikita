


Template.search.events ({
	'keyup #business-search-text': function(e, template) {
		// var value = $('#business-search-text').val();
		// if (value == '') {
		// 	LocalCache.upsert({ _id : 'search_ids' }, { _id : 'search_ids', ids: getAllBusinesses() });
		// } else {
		// 	console.log(value)
		// 	EasySearch.search('businesses', value, function(err, data) {
		// 		console.log(data);
		// 		LocalCache.upsert({ _id : 'search_ids' }, { _id : 'search_ids', ids: data });
		// 	});	
		// }
	},
	'keypress #business-search-text': function(e, template) {
		if(e.which == 13) {
			$('#business-search').trigger('click');
		}
	},
	'click #business-search': function(e, template) {
		$('#business-search-result').html('');
		var toSearch = $('#business-search-text').val();
		console.log(toSearch);
		var matchedName = getBizMatchThis(toSearch);
		// console.log(matchedName); 
		matchedName.forEach(function(obj) {
			console.log(obj.length)
// 
// 0: name
// 1: address
// 2: city
// 3: province
// 6: phone
// 7: category
// 
			var result = '<tr>' + '<td class="name">'+obj.params[0].value+'</td>'
						+ '<td class="address">'+obj.params[1].value + ', '+obj.params[2].value + ' ' + obj.params[3].value + '</td>'
						+ '<td class="phone">' + obj.params[6].value + '</td>'
						+ '</tr>';
			

			$('#business-search-result').append(result);
		});
	}
});

