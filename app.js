
const fs = require('fs');
const files = fs.readdirSync('.');

let filteredFiles = files.filter(file => file.endsWith('.png'));
filteredFiles1 = filteredFiles.filter(file => file.replace(/'/g, ""))

filteredFiles1.forEach(function(element) {
    console.log('![' + element.substring(0, element.indexOf("."))+']'+ '(<'+ element + '>)')

  });
