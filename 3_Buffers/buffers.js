const СBuffer = require("buffer").Buffer;
function show(pData)
{
        // console.log("*".repeat(pData[1].length));
        console.log(`[${pData[0]}]`);
        console.log(`${pData[1]}`);
        console.log();
}
//Заказываем класс

//Создаем новый буфер размером 256
var buff32 = new СBuffer(32);
show(["buff32", buff32]);
show(["toString()", buff32.toString()]);
show(["fill(13)", buff32.fill(13)]);
show(["fill('x')", buff32.fill("x")]);
buff32.write("[go fuck yourself mob]", 15)
show(["buff32.write(\"[go fuck yourself mob]\", 15)", buff32]);
show(["base64", buff32.toString("base64")]);
show(["binary", buff32.toString("binary")]);
show(["toJSON", buff32.toJSON()]);