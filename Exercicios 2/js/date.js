function verifica(){
    var data = new Date()
    var ano = data.getFullYear()  
    var hora = data.getHours()
    var min = data.getMinutes()
    
    var nasc = document.getElementById('anonasc')
    var res = document.getElementById('res')            
        
        if (nasc.value.length == 0 || nasc.value > ano){
            window.alert('ERRO! Digite um valor válido!')
        }else{
            var sex = document.getElementsByName('check')
            var idade = ano - Number(nasc.value)
            var gen = ''            
            var img = document.createElement('img')
            img.setAttribute('id', 'fotos')
        }if(sex[0].checked){
            gen = 'Homem'            
            
            if(idade >= 0 && idade <= 10 ){
                //Bebe
                img.setAttribute('src', 'img/bebe-m.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/jovem-m.png')
            }else if(idade < 60){
                // Adulto
                img.setAttribute('src', 'img/adulto-m.png')
            }else{
                // Velho
                img.setAttribute('src', 'img/velho-m.png')
            }
        }else if(sex[1].checked){
            gen = 'Mulher'
            
            if(idade >= 0 && idade <= 10 ){
                //Criança
                img.setAttribute('src', 'img/bebe-f.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'img/jovem-f.png')
            }else if(idade < 60){
                // Adulto
                img.setAttribute('src', 'img/adulto-f.png')
            }else{
                // Velho
                img.setAttribute('src', 'img/velho-f.png')
            }
        }        
        
        res.innerHTML = `Detectamos ${gen} de ${idade} anos de idade. Agora são <strong>${hora}h${min}min</strong>`
        res.appendChild(img)
    }