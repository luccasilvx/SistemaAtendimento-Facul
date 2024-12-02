package com.SistemaAtendimento.FilaDinamica.Model;

import java.util.LinkedList;
import java.util.List;

public class FilaDinamica {
    private final List<Cliente> fila = new LinkedList<>();

    public void adicionarCliente(Cliente cliente) {
        if (cliente.isPreferencial()) {
            fila.add(0, cliente); // Adiciona preferencial no início
        } else {
            fila.add(cliente); // Adiciona padrão no final
        }
    }

    public Cliente atenderCliente() {
        return fila.isEmpty() ? null : fila.remove(0); // Remove do início
    }

    public Cliente proximoCliente() {
        return fila.isEmpty() ? null : fila.get(0);
    }

    public List<Cliente> listarFila() {
        return new LinkedList<>(fila);
    }
}
