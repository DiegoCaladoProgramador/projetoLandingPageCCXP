const dia = document.getElementById('dia')
const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const lancamento = "01 december 2023"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000

    const finalDias = Math.floor(segTotal / 60 / 60 / 24)
    const finalHoras = Math.floor(segTotal / 60 / 60) %24
    const finalminutos = Math.floor(segTotal / 60) % 60
    const finalSegundos = Math.floor(segTotal) % 60

    dia.innerHTML = formatoTempo(finalDias) + 'D'
    horas.innerHTML = formatoTempo(finalHoras) + 'H'
    minutos.innerHTML = formatoTempo(finalminutos) + 'M'
    segundos.innerHTML = formatoTempo(finalSegundos) + 'S'
}

function formatoTempo (tempo){
    return tempo <10 ? '0'+ tempo : tempo
}

countDown()
setInterval(countDown, 1000)

function highlithCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}

/*function checkKeyboardCode(){
    document.addEventListener('keydown', (event) =>{
        var name = event.key;
        var code = event.key;
        alert(`Tecla Pressionada ${name} \r\n Key code: ${code}`)
    }, false);
}

checkKeyboardCode();*/
addKeyboardEventListeners();

function addKeyboardEventListeners(){
    document.addEventListener('keydown', (event) =>{
        var ingresso1 = document.getElementById("quinta");
        var ingresso2 = document.getElementById("sexta");
        var ingresso3 = document.getElementById("sabado");
        var ingresso4 = document.getElementById("domingo");

        var code = event.code;
        if(code == 'Digit1'){
            ingresso1.classList.toggle("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if(code == 'Digit2'){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.toggle("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if(code == 'Digit3'){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.toggle("card-highlight");
            ingresso4.classList.remove("card-highlight");
        }
        if(code == 'Digit4'){
            ingresso1.classList.remove("card-highlight");
            ingresso2.classList.remove("card-highlight");
            ingresso3.classList.remove("card-highlight");
            ingresso4.classList.toggle("card-highlight");
        }
    }, false);
}