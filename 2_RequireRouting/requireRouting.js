//Модуль requireJSONfile.js обратится к другому requireJSONfile.js в ком загрузиться файл conf.json
const theModule = require("./RequireFileJSON/requireJSONfile.js");
console.log(`[checkRequire.js]: WebRoot - ${theModule.webRoot}`);