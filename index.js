const txtOp1 = document.getElementById("op1")
const txtOperando = document.getElementById("operando")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener("click", calcular)

function calcular(){
    const operando = txtOperando.value
    const op1 = parseFloat (txtOp1.value)
    const op2 = parseFloat (txtOp2.value)
    
    if((operando == "+" || operando == "-" || operando == "*" || 
        operando == "/") && !isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch(operando){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1*op2
                break;
            case "/":
                resultado = op1/op2
                break
        }
        pResultado.style = "color:blue"
        pResultado.innerText= "=" + resultado
    }else{
        pResultado.style = "color:red"
        pResultado.innerText="calculo impsoible"
    }    
}
