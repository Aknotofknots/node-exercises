const module_1 = module.exports; // exports is defined as an object;


/**
 * @description add the printToConsole function to the exports empty object(which is in the module_1 variable)
 * @param {string} anyValueYouWant - awdawdawdawd.
 */
module_1.printToConsole = function (anyValueYouWant ) {
    return anyValueYouWant;
};

/* this is the same as doing the above
module.exports = {
    printToConsole: function (anyValueYouWant) {
        console.log(anyValueYouWant);
    }
};  */