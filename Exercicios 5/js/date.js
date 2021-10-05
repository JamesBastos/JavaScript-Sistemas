let num = document.getElementById('txtn')    
let tab = document.getElementById('txttab') 
let c = []   
let res = document.getElementById('res')

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != 1) {
        return false
    }else {
        return true
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value)){

        alert('funcionando')
        
        }else{
            alert('ERRO! Digite um valor de 1 à 100')            
        }
}