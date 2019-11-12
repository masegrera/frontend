

const nome1 = "João";
const nota1 = 7;
const falta1 = 2;

const nome2 = "Maria";
const nota2 = 9;
const falta2 = 2;

const nome3 = "Renata";
const nota3 = 7;
const falta3 = 5;

function verificaBoletim(nota,falta, nome){
    if(nota > 7 && falta < 3){
        alert (nome + " Você Aprovado!")
    }
    else{
        alert (nome + " Você foi Reprovado!")
    }
}

// Busca o elemento select com id ano

const select = document.getElementById("ano")

//loop
for (let i=0; i <=200; i++){

    // Cria um elemento option no html

    const option = document.createElement("option");

    // Insere o ano dentro do elemeto option criado
    option.innerHTML =2019 -i;

    // Insere o option criado no select
    select.appendChild(option);
   

}
