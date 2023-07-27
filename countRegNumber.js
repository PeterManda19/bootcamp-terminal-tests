module.exports = function(){
    //you functions logic here
}
function countRegNumber(regNumbers){
    if (regNumbers.trim() === "") {
        return 0;
    } else {
        return regNumbers.split(",").map(reg => reg.trim()).length;
    }
}
