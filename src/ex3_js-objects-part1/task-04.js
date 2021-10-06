function checkAndAddNewProperty (property, objectExample) {
    const existence = objectExample.hasOwnProperty(property);
    if (!existence) {
        objectExample[property]='new';
    }
}

module.exports = checkAndAddNewProperty;