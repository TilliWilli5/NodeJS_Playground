//Файл conf.json содержит json объект
//Когда NodeJS загружает файл с расширением .json они автоматически парсяться и на выходе мы получим готовый для работы объект
const conf = require("./conf.json");
console.dir(conf);
console.log(conf.webRoot);
module.exports = conf;