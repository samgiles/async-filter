# async filter

Filter, with promises!

## Usage

```JS
var promiseFilter = require('async-filter');

promiseFilter(['a', 'b', 'c'], function(item) {
	return Promise.resolve(true);
}).then(function(result) {
	console.log(result);
});

// Outputs: ['a', 'b', 'c']
```


## License

MIT.  Copyright (c) 2015 Samuel Giles
