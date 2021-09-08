function checkSpam(str) {
    let a = '1xBet'.toLowerCase();
    let b = 'XXX'.toLowerCase();
    let str2 = str.toLowerCase();
    if (str2.includes(a) || str2.includes(b)) return true;
    return false;
}
