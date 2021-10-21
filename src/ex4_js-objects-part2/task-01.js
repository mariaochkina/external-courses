function checkProperty (property, obj) {
    for (const key in obj) {
      if (!obj.hasOwnProperty(property) && property === key) {
        return obj[property];
      }
    }
  
    return undefined;
  }
  
  module.exports = checkProperty;