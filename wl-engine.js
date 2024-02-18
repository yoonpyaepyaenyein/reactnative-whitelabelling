const config = parseConfig();
const dirSrc = "./wl-app";
const dirDst = `./builds/${config.id}`;

copyDirectory(dirSrc, dirDst);
crateModules(dirDst, config.modules);
createBaseUrl(dirDst, config.baseUrl);
createTheme(dirDst, config.theme);
setId(dirDst, config.id);
setName(dirDst, config.name);
setIcon(dirDst, config.iconsPath);
