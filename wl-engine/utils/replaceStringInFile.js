const fs = require('fs-extra');

const replaceStringInFile = (filename, strOld, strNew) => {
  console.log(`Replace '${strOld}' with '${strNew}' in ${filename}`);

  // Check if the file exists
  if (!fs.existsSync(filename)) {
    console.error(`File ${filename} not found.`);
    return;
  }

  const fileOld = fs.readFileSync(filename, 'utf8');
  const fileNew = fileOld.replace(new RegExp(strOld, 'g'), strNew);

  fs.writeFileSync(filename, fileNew);
  console.log('Replacement successful!');
};

module.exports = replaceStringInFile;
