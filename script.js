const display = document.getElementById("display");

function adicionarValor(value) {
    display.value += value;
}

function limparDisplay() {
    display.value = "";
}

function apagarUltimo() {
    display.value = display.value.slice(0, -1);
}

function calcularResultado() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Erro";
    }
}