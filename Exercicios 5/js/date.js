function adicionar(){
    let num = document.getElementById('txtn')    
    
    if(num.value >= 1 && num.value <= 100){
        let tab = document.getElementById('txttab')
        let tabn = Number(tab.value)

        let c =1
        while(c < 100) // Cria um lço de respostas 
        alert('OK, Funcionando!')        
    }else {
        alert('ERRO! Digite um valor de 1 à 100')
    }

}