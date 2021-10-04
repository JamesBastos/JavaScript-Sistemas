var dia = new Date()
var diaHr = dia.getHours()               
var min   = dia.getMinutes()
        


function carregar(){
    document.getElementById('horas') 
        var img = document.getElementById('fotos')        

            if(diaHr >= 0 && diaHr <= 12){
                horas.innerHTML = `Agora são <strong>${diaHr}h:${min}min</strong>`
                img.src = 'img/amanhecer.jpg'
                document.body.style.backgroundColor = '#dfdb98'
            }else if(diaHr > 12 && diaHr <= 18)  {
                horas.innerHTML = `Agora são <strong>${diaHr}h:${min}min</strong>`
                img.src = 'img/entardecer.jpeg'
                document.body.style.backgroundColor = '#8f210a'
            }else{
                horas.innerHTML = `Agora são <strong>${diaHr}h:${min}min</strong>`
                img.src = 'img/anoitecer.jpg'
                document.body.style.backgroundColor = '#2d2d2d'
            }
    }