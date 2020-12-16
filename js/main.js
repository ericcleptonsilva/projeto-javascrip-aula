
let listaDeFrutas = ["manga", "uva", "laranja"];
listaDeFrutas.push("mangaba");
listaDeFrutas.pop();

console.log(listaDeFrutas);
console.log(listaDeFrutas.toString())
console.log(listaDeFrutas.join(" -> "));

let frutas = [{nome:"manga", cor:"Vermelha"}, {nome:"mangaba", cor:"verde"}]
console.log(frutas)
console.log(frutas[0].nome)


/*let idade = prompt("Qual a sua idade: ");
if (idade > 18){
    console.log("Mario de idade!");
}
else{
    console.log("Menor de idade");
};*/
/*
let count = 0;
while (count <= 5){
console.log(count);
count++;
}*/

let data = new Date();
console.log(data.getHours(),data.getMinutes(),data.getSeconds(),data.getDay(), data.getMonth(), data.getUTCFullYear());
console.log(Date());


