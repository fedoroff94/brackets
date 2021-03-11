module.exports = function check(str, bracketsConfig) {

    let bracketsMap = {},
        openingBrackets = new Set(),
        closingBrackets = new Set();

    bracketsConfig.forEach(pair => {
        bracketsMap[pair[1]] = pair[0];
        openingBrackets.add(pair[0]);
        closingBrackets.add(pair[1]);
    });

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (openingBrackets.has(str[i])) {
            if (str[i] === stack[stack.length - 1] && closingBrackets.has(str[i])) {
                stack.pop()
            } else {
                stack.push(str[i])
            }
        } else if (stack[stack.length - 1] === bracketsMap[str[i]]) {
            stack.pop()
        } else {
            return false
        }
    }
    return !stack.length
};


