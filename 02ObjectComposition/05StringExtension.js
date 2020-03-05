(() => {

    String.prototype.ensureStart = function (string) {

        let result = this.toString();

        if (!result.startsWith(string)) {

            result = string + result;
        }
        console.log(result)
        return result;
    }

    String.prototype.ensureEnd = function (string) {

        let result = this.toString();

        if (!result.endsWith(string)) {

            result += string;
        }
        console.log(result)
        return result;
    }

    String.prototype.isEmpty = function () {

        console.log(!this.toString() ? true : false)
        return !this.toString() ? true : false;
    }

    String.prototype.truncate = function (n) {

        if (this.length <= n) {
            console.log(this.toString())
            return this.toString();

        } else if (n < 4) {

            console.log(`.`.repeat(n))
            return `.`.repeat(n);

        } else if (this.length > n) {

            let result = this.slice(0, n - 1);

            let index = result.lastIndexOf(` `);

            if (index < 0) {

                index = this.length;
            }

            result = this.slice(0, index);

            if (result.length + 3 >= n) {

                let lengthResult = result.length + 3 - n;

                result = result.slice(0, index - lengthResult);
            }

            result += `...`;
            console.log(result)
            return result;
        }
    }

    String.format = function (string, ...params) {

        for (let index = 0; index < arguments[1].length; index++) {

            if (params[index]) {

                string = string.replace(`{${index}}`, params[index]);
            }
        }
        console.log(string)
        return string;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');

