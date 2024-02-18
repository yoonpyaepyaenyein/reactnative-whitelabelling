const fs = require('fs-extra');
const path = require('path');

const createTheme = (dirDst, theme) => {
    const indexPath = path.join(dirDst, 'src/theme/index.js');
    console.log(`Write ${indexPath}`);

    // Ensure the directory exists
    fs.ensureDirSync(path.dirname(indexPath));

    const fileContent = `\
// NOTICE: This file is auto-generated by wl-engine.
export { default } from './themes/${theme}';
`;

    fs.writeFileSync(indexPath, fileContent);

    console.log('Write successful!');
};

module.exports = createTheme;
