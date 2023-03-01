function aclean(arrUnclean) {
    let proxyArr = new Map();
    for(let value of arrUnclean) {
        let key = value.toLowerCase().split('').sort().join('');
        proxyArr.set(key, value);
    }
    return Array.from(proxyArr.values());
}
