var primeiroValor = parseInt(prompt('Digite o primeiro numero:'))
var segundoValor = parseInt(prompt('Digite o segundo valor:'))


var operacao = prompt("Digite 1 para fazer uma divisão, Digite 2 para fazer uma multiplicação, 3 para soma e 4 para a subtração ")


if (operacao == 1) {
  var resultado = primeiroValor / segundoValor
  document.write("<h2>" + primeiroValor + " / " +  segundoValor + " = " + resultado + "</h2>")
  
  
}else if (operacao == 2){
  var resultado = primeiroValor * segundoValor
  document.write("<h2>" + primeiroValor + " * " +  segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 3){
  var resultado = primeiroValor + segundoValor
  document.write("<h2>" + primeiroValor + " + " +  segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 4){
  var resultado = primeiroValor - segundoValor
   document.write("<h2>" + primeiroValor + " - " +  segundoValor + " = " + resultado + "</h2>")
}
 else{
  document.write("<h2>Opção errada </h2>")
 }




// if = se 
//else = senão 
//else if = senão se




