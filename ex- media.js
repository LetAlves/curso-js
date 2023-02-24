/*(function(){
    function calcularMedia(){
        let total = 0
        let qtd = arguments.length
        
        for(let i = 0; i < arguments.length; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("Only numbers")
            }
            total += arguments[i]
        }
        return (total / arguments.length) || 0   
    }
    console.log(calcularMedia(3, 5))
})()
*/
/*try{
    calcularMedia(3, 5, a)
}catch(e){
    console.log("Ocorreu um erro")
    console.log(e.message)
}
*/

// outra vez

(function(){
    function _calcularMedia(){
        let _total = 0
        let _qtd = arguments

        for(let i = 0; i < _qtd.length; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("Only numbers")
            }
            _total += arguments[i]
        }
        return _total / arguments.length || 0

    }
    console.log(_calcularMedia(10, 9, 8 , 9))
})()