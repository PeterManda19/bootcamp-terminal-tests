module.exports = function regCheck(vrnumber, locIndicator){
    return vrnumber.endsWith(locIndicator);
};
