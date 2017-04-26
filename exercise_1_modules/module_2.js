module.exports = {
    name: "model_2",
    module_1: require('./module_1.js').printToConsole,

    printName: function () {
        return "this is the name of this module: " + this.name + " and this is the value given to" +
            "the function in module_1: " + this.module_1("\'heeeerrrrlo\'");
    }
};

