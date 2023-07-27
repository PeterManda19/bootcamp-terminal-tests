module.exports = function(){
    //you functions logic here
    function regCheck(vrnumber, locIndicator){
        return vrnumber.endsWith(locIndicator);
    }
}

