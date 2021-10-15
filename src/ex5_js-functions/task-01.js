function calculate (){
    let result = 0;

    function add(...args){
        result+=args;
    return add;
    }

    function subtract (...args){
        result-=args;
    return substract;
    }

    function multiply (...args){
        result*=args;
    return multiply;    
    }

    function divide (...args){
        result/=args;
    return divide;    
    }

    function reset() {
        return result = 0;
    }
    
    function conclusioResult (){
        return result;
    }

    return {
        add, 
        subtract,
        multiply,
        divide,
        reset,
        conclusioResult,
    };
}

function Calculator(){
    return calculate;
}

const calculator = Calculator();

module.exports = calculator;