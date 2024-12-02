const apiBaseUrl = "http://localhost:8080/api/fila";

const resultadoTexto = document.getElementById("resultado-texto");

document.getElementById("adicionar").addEventListener("click", async () => {
    const nome = prompt("Digite o nome do cliente:");
    if (!nome) {
        resultadoTexto.innerText = "Operação cancelada.";
        return;
    }

    const response = await fetch(`${apiBaseUrl}/adicionar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome }),
    });
    const result = await response.text();
    resultadoTexto.innerText = result;
});

document.getElementById("remover").addEventListener("click", async () => {
    const response = await fetch(`${apiBaseUrl}/atender`);
    const cliente = await response.json();
    resultadoTexto.innerText = cliente
        ? `Cliente atendido: ${cliente.nome}`
        : "Nenhum cliente na fila.";
});

document.getElementById("consultar").addEventListener("click", async () => {
    const response = await fetch(`${apiBaseUrl}/listar`);
    const clientes = await response.json();
    resultadoTexto.innerText = clientes.length
        ? "Fila atual: " + clientes.map(c => c.nome).join(", ")
        : "A fila está vazia.";
});

document.getElementById("proximo").addEventListener("click", async () => {
    const response = await fetch(`${apiBaseUrl}/proximo`);
    const cliente = await response.json();
    resultadoTexto.innerText = cliente
        ? `Próximo cliente: ${cliente.nome}`
        : "Nenhum cliente na fila.";
});
