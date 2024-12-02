package com.SistemaAtendimento.FilaDinamica.Model;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class FilaDinamica {
    private LinkedList<Cliente> fila = new LinkedList<>();

    public void adicionarCliente(Cliente cliente) {
        fila.add(cliente);
    }

    public Cliente atenderCliente() {
        return fila.poll();
    }

    public Cliente proximoCliente() {
        return fila.peek();
    }

    public List<Cliente> listarFila() {
        return new ArrayList<>(fila);
    }
}

