function identCPF (){ 
                
    var cpf = document.querySelector('#campocpf').value;
    
    
     for (i = 0; i < cpf.length; i++){
        if (cpf[i] < String.fromCharCode(48) || cpf[i] > String.fromCharCode(57)) {
            alert ('CPF só pode conter dígitos. Caracter inválido! ')
            break
        }
    }
                 
    if (cpf.length < 11 || cpf.length > 11 ){
        alert('O CPF deve conter 11 dígitos')
    }

    primeiro_digito = calculaDV1(cpf);
    segundo_digito = calculaDV2(cpf)

    if(primeiro_digito != cpf[9] ||segundo_digito != cpf[10]   ) {
        alert('Dados verificadores inválidos!')
    }          
   
}

function calculaDV1(num){ // função para calcular o 1º digito do CPF
    var resto = 0, soma = 0;

    for (i = 10, j=0; i > 1; i--, j++){
        num[j] = parseInt(num[j])
        
        soma =soma + (i*num[j]);
    }

    resto = (soma % 11);
    
    return (resto > 1) ? (11 - resto) : 0;
}

function calculaDV2(num){ // função para calcular o 2º digito  do CPF
    var resto = 0, soma = 0;

    for (i = 11, j=0; i > 1; i--, j++){
        num[j] = parseInt(num[j])
        
        soma =soma + (i*num[j]);
    }

    resto = (soma % 11);
    
    return (resto > 1) ? (11 - resto) : 0;
}



function beibe(){
    var checkbox1  = document.querySelector('#visa')
    var checkbox2  = document.querySelector('#mastercard')
    var checkbox3  = document.querySelector('#amex')

    if(checkbox1.checked){
        
        return 1;
    }
    if(checkbox2.checked){
        
        return 2;
    }
    if(checkbox3.checked){
        
        return 3;
    }
}

function primeiroNum(primeiro){
    var bandeira = document.getElementsByName("dadoscartao");
    if(primeiro[0] == 4){
        bandeira[0].checked = true;    
    } else if(primeiro[0] == 5){
         
    
    } else if(primeiro[0] == 3){
       
    } else {
        document.querySelector('#numero-cartao').value = ''
        
        alert("Cartão inválido") 
    }               
}

function segundoNum(primeiro){
    var bandeira = document.getElementsByName("dadoscartao");
     if(primeiro[0] == 5){
            if(primeiro[1] >= 1 && primeiro[1] <= 5)
            bandeira[1].checked = true;
            else{
                document.querySelector('#numero-cartao').value = ''
        
                 alert("Cartão inválido")
            }                
    } 
    
    if(primeiro[0] == 3){
            if(primeiro[1] == 4 || primeiro[1] == 7)
            bandeira[2].checked = true;
            else{
                document.querySelector('#numero-cartao').value = ''
        
                 alert("Cartão inválido")
            }                
    }              
}

function numeroCartao(){
    var cartao  = document.querySelector('#numero-cartao').value
    var bandeira = document.getElementsByName("dadoscartao");

    if (cartao.length== 1){
        primeiroNum(cartao)
    }
    if (cartao.length== 2){
        segundoNum(cartao)
    }
}

function adicionaSelect(){
    var saches = document.getElementById('opsaches')
    var texto= saches.options[saches.selectedIndex].text;
    var valor= document.getElementById('opsaches').value;
    
    document.getElementById('selecionados1').innerHTML += texto
    + "\n"

    valorint = parseInt(valor)
    campoValor = document.getElementById('campovalor').value
    campoValor1 = parseInt(campoValor)

    document.getElementById('campovalor').value= campoValor1 + valorint
}

function adicionaSelect1(){
    var maquinas = document.getElementById('opmaquina') // referenciando o select com id opmaquina
    var texto= maquinas.options[maquinas.selectedIndex].text; // pega o texto da option selecionada
    
    document.getElementById('selecionados1').innerHTML += texto
    + "\n" // coloca o no text area o que está na var texto, conserva o que já tem dentro (+=)

    var valor= document.getElementById('opmaquina').value; // pega o value da opção selecionada

    valorint = parseInt(valor) // transforma em inteiro para fazer a soma
                
    
    campoValor = document.getElementById('campovalor').value // variavel para armazenar o que tem no 'campovalor'
    campoValor1 = parseInt(campoValor) // transforma em inteiro para fazer a soma

    document.getElementById('campovalor').value= campoValor1 + valorint

    // value do campo valor vai receber o que tinha + o novo valor selecionado
}
