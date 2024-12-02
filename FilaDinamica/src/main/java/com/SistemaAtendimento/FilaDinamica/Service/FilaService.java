package com.SistemaAtendimento.FilaDinamica.Service;

import com.SistemaAtendimento.FilaDinamica.Model.Cliente;
import com.SistemaAtendimento.FilaDinamica.Model.FilaDinamica;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilaService {
    private FilaDinamica fila = new FilaDinamica();

    public void adicionarCliente(Cliente cliente) {
        fila.adicionarCliente(cliente);
    }

    public Cliente atenderCliente() {
        return fila.atenderCliente();
    }

    public Cliente proximoCliente() {
        return fila.proximoCliente();
    }

    public List<Cliente> listarFila() {
        return fila.listarFila();
    }
}

