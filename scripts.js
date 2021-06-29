//fizBuzz
//Se não for um número => 'Não é um número'
//divisivel por 3 e 5 => 'FizzBuzz', ex 15
//divisivel por 3 => 'fizz' 
//divisivel por 5 => 'Buzz'


//Se não for divisivel nem por 3 e nem por 5 => Entrada

let resultado = fizzBuzz(7); // criação da variavel
console.log(resultado) //saida de dados

function fizzBuzz(entrada){
    if(typeof entrada !== 'number')
    return 'Não é um número';

    if((entrada % 3 === 0) && (entrada % 5 ===0 )) //se a entrada é divisivel por 3 e por 5
        return 'FizzBuzz'

        if(entrada % 3 === 0) // se entrada for divisivel por 3 retorna Fizz
        return 'Fizz';

        if(entrada % 5 === 0)
        return 'Buzz';

        return entrada;
}

