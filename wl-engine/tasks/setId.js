const fs = require('fs-extra');
const replaceStringInFile = require('../utils/replaceStringInFile');

const setId = (dirDst, idNew) => {
  const idOld = 'com.whitelabel';
  const packagePathOld = idOld.replace(/\./g, '/');
  const packagePathNew = idNew.replace(/\./g, '/');
  const packageRootOld = packagePathOld.split('/')[0];

  replaceStringInFile(`${dirDst}/android/app/BUCK`, idOld, idNew);
  replaceStringInFile(`${dirDst}/android/app/build.gradle`, idOld, idNew);
  replaceStringInFile(`${dirDst}/android/app/src/main/AndroidManifest.xml`, idOld, idNew);
  replaceStringInFile(`${dirDst}/android/app/src/main/java/${packagePathOld}/MainActivity.java`, idOld, idNew);
  replaceStringInFile(`${dirDst}/android/app/src/main/java/${packagePathOld}/MainApplication.java`, idOld, idNew);
  replaceStringInFile(`${dirDst}/ios/whitelabel.xcodeproj/project.pbxproj`, idOld, idNew);

  const sourceFileMainActivity = `${dirDst}/android/app/src/main/java/${packagePathOld}/MainActivity.java`;
  const sourceFileMainApplication = `${dirDst}/android/app/src/main/java/${packagePathOld}/MainApplication.java`;

  // Check if source files exist before moving
  if (fs.existsSync(sourceFileMainActivity)) {
    console.log(`Move ${sourceFileMainActivity}`);
    console.log(`  to ${`${dirDst}/android/app/src/main/java/${packagePathNew}/MainActivity.java`}`);
    fs.moveSync(sourceFileMainActivity, `${dirDst}/android/app/src/main/java/${packagePathNew}/MainActivity.java`);
  } else {
    console.error(`Source file ${sourceFileMainActivity} not found.`);
  }

  if (fs.existsSync(sourceFileMainApplication)) {
    console.log(`Move ${sourceFileMainApplication}`);
    console.log(`  to ${`${dirDst}/android/app/src/main/java/${packagePathNew}/MainApplication.java`}`);
    fs.moveSync(sourceFileMainApplication, `${dirDst}/android/app/src/main/java/${packagePathNew}/MainApplication.java`);
  } else {
    console.error(`Source file ${sourceFileMainApplication} not found.`);
  }

  console.log(`Remove ${dirDst}/android/app/src/main/java/${packageRootOld}`);
  fs.removeSync(`${dirDst}/android/app/src/main/java/${packageRootOld}`);
};

module.exports = setId;
