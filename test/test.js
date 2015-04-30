var filter = require('../index');
var assert = require('assert');

describe("#promiseFilter", function() {
	it("should filter the primary array using the callback provided", function(done) {
		var filteredPromise = filter(['a', 'b', 'c', 'd'], function(value) {
			var ok = !(value === 'a' || value === 'b' || value === 'c');
			return Promise.resolve(ok);
		});

		filteredPromise.then(function(filteredArray) {
			assert.equal(filteredArray.length, 1);
			assert(filteredArray.indexOf('d') >= 0);
			done();
		}).catch(function(e) {
			done(e);
		});
	});
});
