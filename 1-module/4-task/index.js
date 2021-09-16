const SPAM_STRING_1 = '1xbet';
const SPAM_STRING_2 = 'xxx';
function checkSpam(str) {
    SPAM_STRING_1.toLowerCase();
    SPAM_STRING_2.toLowerCase();
    let str2 = str.toLowerCase();
    return str2.includes(SPAM_STRING_1) || str2.includes(SPAM_STRING_2);
}
