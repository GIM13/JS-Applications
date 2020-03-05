function solve() {

    let extensibleObject = {
        extend: function (object) {
            for (const el in object) {

                if (typeof object[el] === `function`) {

                    Object.prototype[el] = object[el];

                } else {

                    extensibleObject[el] = object[el];
                }
            }
        }
    };

    extensibleObject.extend({
        extensionMethod: function (x) { x => x + 6 },
        extensionProperty: 'someString'
    });

    return extensibleObject;
}

console.log(solve());