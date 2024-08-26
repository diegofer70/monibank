export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    validaNumerosRepetidos(cpf);
    validaNumerosDigito(cpf);
    console.log(validaNumerosRepetidos(cpf));
    
}

function validaNumerosRepetidos(cpf) {
    const numeroRepetidos = [
        '0000000000',
        '1111111111',
        '2222222222',
        '3333333333',
        '4444444444',
        '5555555555',
        '6666666666',
        '7777777777',
        '8888888888',
        '9999999999'
    ]
    return numeroRepetidos.includes(cpf);
}

function validaNumerosDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for (let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[9];
}