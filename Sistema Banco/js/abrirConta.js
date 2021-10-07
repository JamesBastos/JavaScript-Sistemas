//Cria um banco de dados local no navegador // Apenas estudo, não usar
/*let db = openDatabase('MeuBanco', '2.0', 'Mybase', 4048 )
db.transaction(function(criar){
    criar.executeSql('CREATE TABLE users (id INTEGER PRIMARY KEY,nome TEXT,senha TEXT, saldo TEXT ) ')
})*/

//Todas as variáveis da página popup.html
let nome = document.getElementById('inputLogin')
let contaTipo = document.getElementsByName('inputTipoConta')
let info = document.getElementById('infoConta')
let senha = document.getElementById('inputSenha')


let s = document.getElementById('saldoConta')

s.innerHTML = `Saldo da conta é ${saldoDaConta} `

// função onde guarda as informações
function abrirConta(){
let saldo = []
let saldoDaConta = Number(saldo.value)

if(contaTipo[0].checked || contaTipo[1].checked){    
    
    let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')
    
    listUser.push({
        nomeCad: nome.value,
        senhaCad: senha.value,        
    })   
    saldoDaConta = 150
    localStorage.setItem('listUser', JSON.stringify(listUser))

    info.innerHTML = `Seja-bem Vindo <span class="nomeCliente">${nome.value}</span> 
você ganhou <span class="saldoCliente">R$${saldoDaConta},00</span> ao abrir sua conta!<br/> 
<input type="button" value="Clique aqui para acessar sua conta!" onclick="acessoConta()">`
}else { 
    alert('Erro no cadastro!')
}
}

//Aqui armazena as nome, senha e saldo no bd local do navegador
/*db.transaction(function(armazenar){
    armazenar.executeSql('INSERT INTO users (nome,senha,saldo) VALUES (?,?,?)',[nome.value,senha.value, saldoDaConta])
})*/

function acessoConta(){
    varWindow = window.open (
    'suaConta.html',
    'pagina' ,
    "width=800, height=600, top=100, left=510, scrollbars=no " )
}




function acessar(){
let usuario = document.getElementById('txtLogin')
let password = document.getElementById('txtSenha')
let listUser = []

let userValid = {
    nome: '',
    senha: ''
}
listUser = JSON.parse(localStorage.getItem('listUser'))

listUser.forEach((item) => {
    if(usuario.value == item.nomeCad && password.value == item.senhaCad){
        userValid = {
            nome: item.nomeCad,
            senha: item.senhaCad
        }

    }
})

if(usuario.value.length == 0){
    alert('Preencha os campos de login')
}else if(usuario.value == userValid.nome && password.value == userValid.senha){
    window.location.href = 'areadousuario.html'
}else{
    alert('Dados inválidos!')
}

}




  


