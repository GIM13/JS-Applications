const Console = require(`./C#Console`);
const assert = require(`chai`).assert;

describe(`check writeLine`, () => {

    it(`check for arguments.length === 1 && argument === string`, () => {

        assert.equal(Console.writeLine(`string`), `string`);
    });

    it(`check for arguments.length === 1 && argument === object`, () => {

        assert.equal(Console.writeLine({ obj: "obg" }), `{"obj":"obg"}`);
    });

    it(`check for arguments.length > 1 && arguments[0] !== string`, () => {

        assert.throw(() => Console.writeLine(1, 6), `No string format given!`);
    });

    it(`check for arguments.length > 1 && arguments[0] === string && placeholder !== arguments.length - 1`, () => {

        assert.throw(() => Console.writeLine(`string{0}{1}`, 6), `Incorrect amount of parameters given!`);
    });

    it(`check for error arguments.length > 1 && arguments[0] === string && placeholder === arguments.length - 1`, () => {

        assert.throw(() => Console.writeLine(`string{55}{0}`, 6, 7), `Incorrect placeholders given!`);
    });

    it(`check for arguments is OK `, () => {

        assert.equal(Console.writeLine(`string{0}{1}`, 6, 7), `string67`);
    });
});  
