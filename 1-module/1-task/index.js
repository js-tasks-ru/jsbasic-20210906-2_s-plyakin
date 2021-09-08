function factorial(n) {
    // ваш код...
    let data = 1;
    if (n == 0 || n == 1) return 1;
    for (let i = n; i > 0; i--) {
        data *= i;
    }
    return data;
}
