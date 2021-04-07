var nombreInput;
var valorNombreInput;
var edadInput;
var valorEdadTextInput;
var valorEdadNumInput;
var pesoInput;
var pesoTextInput;
var pesoNumInput;
var alturaInput;
var alturaTextInput;
var alturaNumInput;
var resultadoInput;

function imc(texto="SIN TEXTO"){
    nombreInput = document.getElementById("name");
    valorNombreInput = nombreInput.value;
    console.log(valorNombreInput);

    edadInput = document.getElementById("age");
    valorEdadTextInput = edadInput.value;
    valorEdadNumInput = parseFloat(valorEdadTextInput);
    console.log(valorEdadNumInput);

    pesoInput = document.getElementById("weight");
    pesoTextInput = pesoInput.value;
    pesoNumInput = parseFloat(pesoTextInput);
    console.log(pesoNumInput);

    alturaInput = document.getElementById("height");
    alturaTextInput = alturaInput.value;
    alturaNumInput = parseFloat(alturaTextInput);
    console.log(alturaNumInput);

    resultadoInput = document.getElementById("result");
    resultadoInput.value = pesoNumInput/(alturaNumInput*alturaNumInput);
    resultadoInput.value = parseFloat(resultadoInput.value);
    console.log(resultadoInput.value);

    return false;
}