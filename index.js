module.exports = function (){

    // Set innerHTML
    if(arguments.length > 0 && typeof arguments[0] != 'undefined'){

        // It means that we have to setup: before
        if( arguments[1] === true ) Dom.setup( this, 'destroy' );

        this.innerHTML = arguments[0];

        // It means that we have to setup: after
        if( arguments[1] === true ) Dom.setup( this, 'initialize' );

        return this;
    }

    return this.innerHTML;
};