const apiBaseUrl = "http://localhost:8080/api/fila";

const resultadoTexto = document.getElementById("resultado-texto");
const nomeInput = document.getElementById("nome-cliente");
const preferencialCheckbox = document.getElementById("tipo-preferencial");

document.getElementById("adicionar").addEventListener("click", async () => {
    const nome = nomeInput.value.trim();
    const preferencial = preferencialCheckbox.checked;

    if (!nome) {
        resultadoTexto.innerText = "Por favor, insira o nome do cliente.";
        return;
    }

    const response = await fetch(`${apiBaseUrl}/adicionar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, preferencial }),
    });
    const result = await response.text();
    resultadoTexto.innerText = `O cliente ${nome} foi adicionado com sucesso.`;

    nomeInput.value = "";
    preferencialCheckbox.checked = false;
});

document.getElementById("remover").addEventListener("click", async () => {
    const response = await fetch(`${apiBaseUrl}/atender`);
    const cliente = await response.json();
    resultadoTexto.innerText = cliente
        ? `O cliente ${cliente.nome} será atendido.`
        : "Nenhum cliente na fila.";
});

document.getElementById("consultar").addEventListener("click", async () => {
    const response = await fetch(`${apiBaseUrl}/listar`);
    const clientes = await response.json();
    if (clientes.length) {
        resultadoTexto.innerHTML = "A situação da fila atual:<br>" + clientes
            .map((cliente, index) =>
                `${index + 1}. ${cliente.nome} (${cliente.preferencial ? "Preferencial" : "Padrão"})`
            )
            .join("<br>");
    } else {
        resultadoTexto.innerText = "A fila está vazia.";
    }
});

document.getElementById("proximo").addEventListener("click", async () => {
    const response = await fetch(`${apiBaseUrl}/proximo`);
    const cliente = await response.json();
    resultadoTexto.innerText = cliente
        ? `Próximo Cliente: ${cliente.nome}`
        : "Nenhum cliente na fila.";
});

document.getElementById('tipo-preferencial').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('tipo-padrao').checked = false;
    }
});

document.getElementById('tipo-padrao').addEventListener('change', function() {
    if (this.checked) {
        document.getElementById('tipo-preferencial').checked = false;
    }
});

