function ucFirst(str) {
    // ваш код...
    if (str.length == 1) return str.toUpperCase();
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
}
