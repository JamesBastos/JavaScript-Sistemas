let db = openDatabase('MeuBanco', '2.0', 'Mybase', 4048 )
db.transaction(function(criar){
    criar.executeSql('CREATE TABLE users (id INTEGER PRIMARY KEY,nome TEXT,senha TEXT, saldo TEXT ) ')
})
let nome = document.getElementById('inputLogin')
let contaTipo = document.getElementsByName('inputTipoConta')
let info = document.getElementById('infoConta')
let senha = document.getElementById('inputSenha')


function abrirConta(){
let saldo = []
let saldoDaConta = Number(saldo.value)
db.transaction(function(armazenar){
    armazenar.executeSql('INSERT INTO users (nome,senha,saldo) VALUES (?,?,?)',[nome.value,senha.value, saldoDaConta])
})
if(contaTipo[0].checked){    
    saldoDaConta = 100
    
}else if(contaTipo[1].checked){
    
    saldoDaConta = 150    
}

info.innerHTML = `Seja-bem Vindo <span class="nomeCliente">${nome.value}</span> 
você ganhou <span class="saldoCliente">R$${saldoDaConta},00</span> ao abrir sua conta!<br/> 
<input type="button" value="Clique aqui para acessar sua conta!" onclick="acessoConta()">`
}

function acessoConta(){
    varWindow = window.open (
    'suaConta.html',
    'pagina' ,
    "width=800, height=600, top=100, left=510, scrollbars=no " )
}

function acessar(){
let log = document.getElementById('txtLogin')
let password = document.getElementById('txtSenha')
    
    if(log == 'James' && password == '123456'){
        alert('Ok! Funcionando!')
    }else{
        alert('Erros tem no seu código')
    }
    
  }