function calculadora() {
    const operecao = Number(prompt("Digite para \n1-Soma[+]\n2-Subtração[-]\n3-Divisão Real[/]\n4-Divisão Inteira[%]\n5-Multiplicação[*]\n6-Potenciação[**]"))

    if (!operecao || operecao > 7) {
        alert(`Erro - Digite uma opção valida`)
        calculadora();
    } else {
        let n1 = Number(prompt("Digite o primeiro valor: "));
        let n2 = Number(prompt("Digite o segundo valor: "));
        let resultado;
        if (!n1 || !n2) {
            alert(`Erro - Parametros invalidos`)
            calculadora();
        } else {
            function Soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)// só funciona por causa da crase
                novaOperacao();
            }
            function Subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function DivisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();

            } function DivisaoInteira() {
                resultado = n1 % n2;
                alert(` o resto da divisão entre ${n1} % ${n2} é igual a ${resultado}`)
                novaOperacao();

            } function Multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function Potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt("Deseja fazer uma nova operação? [1]Sim \nDigite [2]Não")
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert(`Até mais`)
                } else {
                    alert(`Digite uma opção valida`)
                    novaOperacao();
                }
            }
        }
            switch(operecao){
                case 1:
                    Soma();
                    break;
                    case 2:
                        Subtracao()
                        break;
                        case 3:
                            DivisaoReal();
                            break;
                            case 4:
                                DivisaoInteira();
                                break;
                                case 5:
                                    Multiplicacao();
                                    break;
                                    case 6:
                                        Potenciacao();
                                        break;
            }
        
    }


}
calculadora();