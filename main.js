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
const tempoObjetivo1= new Date("2024-10-05T00:00:00")

contadores[0].textContent= tempoObjetivo1;