function teste(cb){
    console.log("Função normal")
    if(typeof cb === "function"){
        cb()
    }
}
teste(function(){
    console.log("function de callback")
})