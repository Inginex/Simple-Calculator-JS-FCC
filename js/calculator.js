//Instruções em Português e/and instructions in English.

//Recuperar as teclas /Get the keys
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

for(var i = 0; i < keys.length; i++){
  keys[i].onclick = function(e){
    
    //Recuperar os valores /Get the values
    var input = document.querySelector('.screen');
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;
  
  //Apaga o conteudo do innerHTML /Erase the content of innerHTML
  if (btnVal == 'C'){
    input.innerHTML = '';
    decimalAdded = false;
  }
  
  //Se a tecla for pressionada, calcule e mostre o resultado /If key is pressed, calculate and display the result
  else if (btnVal == '='){
    var equation = inputVal;
    var lastChar = equation[equation.length - 1];
    
    //Substitui x por * e ÷ por / /Replace x for * and ÷ for /
    equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
  
  //Ultima coisa a se fazer é checar o ultimo caractere da equação, se for um operador ou um decimal, remova ele. / Last thing left to do is checking the last character of the equation, if it is an operator or an decimal, remove ir.
  if (operators.indexOf(lastChar) > -1 || lastChar == '.')
    equation = equation.replace(/.$/, '');

  if (equation)
    input.innerHTML = eval(equation);
  
  decimalAdded = false;
}
  
else if (operators.indexOf(btnVal) > -1){
  
  
  var lastChar = inputVal[inputVal.length -1];
  
  //Apenas adiciona um operador se o input não estiver vazio e não tiver nenhum operador no final / Only add operator if input is not empty and there is no operator at the last
  if(inputVal != '' && operators.indexOf(lastChar) == -1)
    input.innerHTML += btnVal;
  
  //Permite o sinal de menos se a string estiver vazia / Allow minus if the string is empty
  else if (inputVal == '' && btnVal == '-')
    input.innerHTML += btnVal;
  
  //Substitui o ultimo operador(se existir) por um novo operador recem pressionado / Replace the last operator (if exists) with the newly pressed operator
  if (operators.indexOf(lastChar) > -1 && inputVal.length > 1){
  //Aqui, '.' coincide com qualquer caractere enquanto $ denota o final da seqüência de caracteres, então qualquer coisa (seja um operador neste caso) no final da string de caracteres será substituída por novo operador /  Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator 
    input.innerHTML = inputVal.replace(/.$/, btnVal);
  }
  decimalAdded = false;
}
  
//Resolve o problema do decimal usando a tag 'decimalAdded' que será revomida apos cada operação /  Solves the problem of the decimal using the tag, which will be removed after each operation
else if(btnVal == '.') {
  if(!decimalAdded){
    input.innerHTML += btnVal;
    decimalAdded = true;
  }
}
  
  //Se alguma outra tecla for pressionada, ela sera acrescentada. / If any other key is pressed, just append it
  else {
    input.innerHTML += btnVal;
  }
  e.preventDefault();
 } 
}