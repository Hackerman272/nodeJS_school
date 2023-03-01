function groupById(arrayForObject) {
    return arrayForObject.reduce((newObject, value) => {
        newObject[value.id] = value;
        return newObject;
    }, {})
}
