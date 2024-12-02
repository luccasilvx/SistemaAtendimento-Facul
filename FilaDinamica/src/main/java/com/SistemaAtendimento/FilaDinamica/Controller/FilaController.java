package com.SistemaAtendimento.FilaDinamica.Controller;

import com.SistemaAtendimento.FilaDinamica.Model.Cliente;
import com.SistemaAtendimento.FilaDinamica.Service.FilaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/fila")
public class FilaController {
    private final FilaService filaService;

    public FilaController(FilaService filaService) {
        this.filaService = filaService;
    }

    @PostMapping("/adicionar")
    public ResponseEntity<String> adicionarCliente(@RequestBody Cliente cliente) {
        filaService.adicionarCliente(cliente);
        return ResponseEntity.ok("Cliente adicionado à fila!");
    }

    @GetMapping("/atender")
    public ResponseEntity<Cliente> atenderCliente() {
        Cliente cliente = filaService.atenderCliente();
        return ResponseEntity.ok(cliente);
    }

    @GetMapping("/proximo")
    public ResponseEntity<Cliente> proximoCliente() {
        Cliente cliente = filaService.proximoCliente();
        return ResponseEntity.ok(cliente);
    }

    @GetMapping("/listar")
    public ResponseEntity<List<Cliente>> listarFila() {
        return ResponseEntity.ok(filaService.listarFila());
    }
}
