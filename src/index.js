module.exports = function (){

    // Set innerHTML
    if(arguments.length > 0 && typeof arguments[0] != 'undefined'){
        this.innerHTML = arguments[0];
        return this;
    }

    return this.innerHTML;
};