export function oneOf (value, validList) {
    for (let i = 0; i < validList.length; i++){
        if (validList[i] === value) {
            return true;
        }
    }
    return false;
};