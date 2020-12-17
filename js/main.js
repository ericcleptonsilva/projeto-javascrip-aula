
/*let listaDeFrutas = ["manga", "uva", "laranja"];
listaDeFrutas.push("mangaba");
listaDeFrutas.pop();

console.log(listaDeFrutas);
console.log(listaDeFrutas.toString())
console.log(listaDeFrutas.join(" -> "));

let frutas = [{nome:"manga", cor:"Vermelha"}, {nome:"mangaba", cor:"verde"}]
console.log(frutas)
console.log(frutas[0].nome)


let idade = prompt("Qual a sua idade: ");
if (idade > 18){
    console.log("Mario de idade!");
}
else{
    console.log("Menor de idade");
};

let count = 0;
while (count <= 5){
console.log(count);
count++;
}

let data = new Date();
console.log(data.getHours(),data.getMinutes(),data.getSeconds(),data.getDay(), data.getMonth(), data.getUTCFullYear());
console.log(Date());
*/

// funções

/*function soma(n1, n2){
    return n1 + n2;

}

console.log(soma(5, 25));


function validadeIdade(idade){
    var validar = 0;
    if (idade >= 18){
        validar = "Maior de idade!"
    }
    else{
        validar = "Menor de idade!"
    }
    return validar;
}

console.log(validadeIdade(prompt("Digita a idade!")));
*/

// manipulando elementos na página

function botao(){
    alert("Sucesso no Clique!");
}

function clicou(){
    document.getElementById("clicou").innerHTML = "Sucesso!!"
} 

function redirecionar(){
   // window.open("https://youtube.com.br")
   window.location.href = "https://youtube.com.br";

}

function trocar(elemento){
    elemento.innerHTML = "Você passou o mouse aqui!!"
    // document.getElementById("troca").innerHTML = "Trcou o texto com Sucesso!!"
}

function voltar(elemento){
    elemento.innerHTML = "Passou o Mouse aqui!"
    //document.getElementById("troca").innerHTML = "Trcou o texto com Sucesso!!"
}

function loade(){
    alert("Página carregada")
}

function change(elemento){
    let valor = elemento.value;
    console.log(valor);
    return valor;
}