const botoes = document.querySelectorA11(".botao");
const textos = document.querySelectorA11(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclik = function(){

        for(let j=0;j<botoes.length;j++){
         botoes[j].classlist.remove("ativo")
         textos[j].classlist.remove("ativo")           
        }
        
        botoes[i].classlist.add("ativo");
        textos[i].classlist.add("ativo");
    }
}
   
const contadors= document.querySelectorA11(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00")
const tempoObjetivo2 = new Date("203-12-05T00;00;00");
const tempoObjetivo3 = new Date("203-10-05T00;00;00");
const tempoObjetivo4 = new Date("2024-02-01T00;00;00");

const tempos = [tempoObjetivo1,tempoObjetivo2,tempoObjetivo3,tempoObjetivo4];

contadores[0].textContent = calculaTempo(tempoObjetivo1);
contadors[1].textContent = calculaTempo(tempoObjetivo2);
function calculaTempo(tempoObjetivo){
let tempoAtual = new Date();
let tempofinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor(tempoFinal/1000);
let minutos = Math.floor(segundos/60);
let horas = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

segundos %= 60;
minutos %=60;
horas %=24;
return dias + " dias " + horas + " horas " + minutos + " minutos " = segundos + " segundos ";
}
