const fs = require('fs'),
    amdclean = require('amdclean');

fs.writeFileSync('testAmdClean_cleaned.js', amdclean.clean({
    filePath: 'testAmdClean.js',
}));
