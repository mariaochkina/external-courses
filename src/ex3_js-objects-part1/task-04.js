function checkAndAddNewProperty (property, objectExample) {
    if (!objectExample.hasOwnProperty(property)) {
        objectExample[property]='new';
    }
    return objectExample;
}

module.exports = checkAndAddNewProperty;
