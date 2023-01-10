var nota1 = parseFloat (prompt ("Informe a sua nota do primeiro bimestre: "));
var nota2 = parseFloat (prompt ("Informe a sua nota do segundo bimestre: "));
var nota3 = parseFloat (prompt ("Informe a sua nota do terceiro bimestre: "));
var nota4 = parseFloat (prompt ("Informe a sua nota do quarto bimestre: "));

var notaFinal = (nota1 + nota2 + nota3 + nota4) / 4

var notaFixada = notaFinal.toFixed (1)

console.log("Sua nota final é: " + notaFixada)

if (notaFinal >= 7)
  alert("Você foi aprovado até o próximo semestre, sua nota foi: " + notaFixada)
else
  alert("Você está reprovado. Sua nota foi de: " + notaFixada + " estude mais, até a próxima!")
