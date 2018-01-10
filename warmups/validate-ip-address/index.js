let ipAddress = function(ip){
    if (ip < 255 && ip > 0 && ip !== 233) {
        return true;
    }else {
        return false;
    }
}
console.log(ipAddress(233));

const validateIp = str => {
    let arr = str.split(".");
    if (arr.length !== 4) return false;
    return arr.every((num) => {
        num = Number(num);
        if (!(num < 256 && num >= 0))
        return false;
    });
}