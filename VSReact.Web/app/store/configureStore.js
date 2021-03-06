﻿// dynamic imports aren't supported by ES6 and hence here we're using require instead of import
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prod');
} else {
    module.exports = require('./configureStore.dev');
}