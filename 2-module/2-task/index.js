function isEmpty(obj) {
    // ваш код...
    // let numberOfKeys = Object.keys(obj).length;
    if (!Object.entries(obj).length) {
        return true;
    }
    return false;
}
